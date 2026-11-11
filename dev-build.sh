#!/bin/sh
set -eu

# Build/rebuild the backend and start the development stack. The frontend source
# is bind-mounted, so Vite applies code changes without rebuilding its image.
docker compose -f docker-compose.dev.yml up --build
