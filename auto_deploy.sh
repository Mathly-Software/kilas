#!/usr/bin/env bash
# Automatic Docker deployment for Kilas.
# Pulls the latest base images, rebuilds the frontend + backend images,
# and recreates the db/backend/frontend containers in one step.
set -euo pipefail

export PATH=$PATH:/usr/local/go/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin

# Always run from the repo root, wherever the script was invoked from
cd "$(dirname "$0")"

log() {
  echo "$(date '+%Y-%m-%d %H:%M:%S'): $*"
}

log "Starting Docker deployment..."

# ---------------------------------------------------------------------------
# Pre-flight checks
# ---------------------------------------------------------------------------
if [ ! -f .env ]; then
  log "ERROR: .env not found. Copy .env.docker.example to .env and configure it."
  exit 1
fi

if ! docker info >/dev/null 2>&1; then
  log "ERROR: $(whoami) cannot access the Docker daemon."
  log "       Run: sudo usermod -aG docker $(whoami)  then log out/in (or run this script with sudo)."
  exit 1
fi

# ---------------------------------------------------------------------------
# Build + activate
# ---------------------------------------------------------------------------
# Pull newer base images (golang, node, nginx, alpine, mysql) when available.
log "Building images..."
docker compose build --pull

log "Starting/recreating containers..."
# --remove-orphans cleans up containers from services that no longer exist.
# Compose stops with an error if the db or backend never becomes healthy.
docker compose up -d --remove-orphans

# ---------------------------------------------------------------------------
# Post-deploy report
# ---------------------------------------------------------------------------
log "Container status:"
docker compose ps

log "Cleaning up dangling images..."
docker image prune -f >/dev/null

# Optional smoke test: the backend healthcheck and nginx proxy must answer.
site_port="$(grep -E '^FRONTEND_PORT=' .env 2>/dev/null | tail -n1 | cut -d= -f2 | tr -d '\r"' || true)"
site_port="${site_port:-80}"

smoke_url="http://127.0.0.1:${site_port}/api/ping"
http_ok() {
  if command -v curl >/dev/null 2>&1; then
    curl -fsS "$1" >/dev/null 2>&1
  elif command -v wget >/dev/null 2>&1; then
    wget -q -O /dev/null "$1" >/dev/null 2>&1
  else
    return 0 # no HTTP client available; skip the check
  fi
}

if http_ok "$smoke_url"; then
  log "Smoke test passed: ${smoke_url}"
else
  log "WARNING: smoke test failed — check 'docker compose logs -f backend' / 'docker compose logs -f frontend'."
  exit 1
fi

log "Docker deployment completed successfully."
