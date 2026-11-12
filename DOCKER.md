# Docker

The whole site runs as one package via `docker compose`: database + backend + frontend.

| Service  | Image               | Source                   | Port              |
| -------- | ------------------- | ------------------------ | ----------------- |
| db       | `mysql:8.4`         | official image           | 3306 (internal)   |
| backend  | `kilas-backend`     | `backend/Dockerfile`     | 8080 (internal)   |
| frontend | `kilas-frontend`    | `frontend/Dockerfile`    | 80 → `${FRONTEND_PORT}` |

The frontend image is a multi-stage build: Vite compiles the SPA, then nginx serves the
static files and proxies `/api` and `/public` to the backend. The database is included
as its own container with a persistent volume (`db_data`).

> The official `mysql` image does not publish an Alpine variant, so this uses the
> standard `mysql:8.4` image. It is fully compatible with the backend's
> `gorm.io/driver/mysql` driver.

## Quick start

```bash
cp .env.docker.example .env     # then edit values
docker compose up -d --build
```

Open <http://localhost> (or `http://localhost:${FRONTEND_PORT}`). On first start the
database is created and the backend runs `AutoMigrate` + product seeding automatically.

## Development with Docker

Development uses a separate Compose stack so it does not affect the production setup above.
From the repository root, run:

```bash
sh dev-build.sh
```

Open <http://localhost:5173>. The frontend source is bind-mounted into the Vite
container and file watching uses polling, so frontend edits hot-reload (including on
Docker Desktop). API requests are proxied to the backend container. Backend source is
not mounted: rerunning `sh dev-build.sh` rebuilds the backend image and restarts the
stack. The backend API is also available at <http://localhost:8080>.

The development database uses its own `dev_db_data` volume and default local-only
credentials, so an `.env` file is optional. If present, its backend settings are loaded;
Compose still forces the database hostname and development ports. Stop the stack with
`Ctrl+C`, or run `docker compose -f docker-compose.dev.yml down`. Add `-v` to that
command only if you want to delete development database and upload data.

## Environment

Compose loads `.env` from the project root and passes it to the backend container. The
bundled database uses the same values:

```env
DATABASE_HOST=db                     # bundled container; change for external MySQL
DATABASE_PORT=3306
DATABASE_NAME=kilas
DATABASE_USERNAME=kilas
DATABASE_PASSWORD=secret
DATABASE_ROOT_PASSWORD=root-secret   # root password for the db container only
```

`DATABASE_HOST=db` resolves to the `db` service on the compose network. To use an
external/managed MySQL instead, change `DATABASE_HOST` (e.g. `host.docker.internal`
for a database on the Docker host, or the managed hostname) and stop/remove the `db`
service. The `extra_hosts` mapping makes `host.docker.internal` work on Linux too.

Other values (`ACCESS_TOKEN_SECRET`, `REFRESH_TOKEN_SECRET`, `GEMINI_API_KEY`,
Google OAuth, Midtrans) are read from the same `.env` file.

## Inspecting the production database with DBeaver

The MySQL container is bound to `127.0.0.1:3307` on the server only, so it is not
publicly reachable. After deploying the Compose port mapping, connect from your computer
through SSH:

```bash
ssh -N -L 3307:127.0.0.1:3307 <ssh-user>@kilas.my.id
```

Keep that terminal open, then create a MySQL connection in DBeaver with host
`127.0.0.1`, port `3307`, and the database name, username, and password from the
server's `.env`. Use the application database user rather than `root`. Never replace
the loopback-only port binding with a public `3306:3306` mapping.

Apply the port mapping on the server from the repository directory with:

```bash
docker compose up -d db
```

This recreates the database container to apply the port mapping but keeps the `db_data`
volume.

## Operations

```bash
# rebuild after code changes
docker compose up -d --build

# logs
docker compose logs -f db
docker compose logs -f backend
docker compose logs -f frontend

# stop everything (data is kept)
docker compose down

# stop and delete the database + uploads (fresh start)
docker compose down -v
```

Uploaded images live in the `uploads` volume mounted at `/app/public/uploads` in the
backend container; database files live in the `db_data` volume.

Database credentials are only applied when `db_data` is empty. If you change
`DATABASE_*` values later, run `docker compose down -v` to re-initialize (this deletes
existing data).

## Automatic deployment

`.github/workflows/deploy.yaml` SSHes into the VPS and runs `auto_deploy.sh`, which now:

1. checks that `.env` exists and the user can access Docker,
2. pulls newer base images and rebuilds the backend/frontend images,
3. recreates the containers with `docker compose up -d --remove-orphans`,
4. prints container status, prunes dangling images, and smoke-tests `/api/ping`.

One-time VPS setup:

```bash
cd /home/simpl-admin/kilas
cp .env.docker.example .env      # edit secrets + DB password
sudo usermod -aG docker "$USER"  # allow docker without sudo, then log out/in
# If migrating from the old systemd/nginx deployment, free port 80 first:
# sudo systemctl disable --now kilas_backend.service nginx
```

## Notes

- `main.go` no longer requires a `.env` file; it falls back to real environment
  variables, which is how the container receives its config.
- `APP_ADDRESS` and `APP_PORT` are forced to `0.0.0.0:8080` by compose so a local
  `.env` value like `localhost` cannot break the container.
- Google OAuth redirect URLs must match the public URL you deploy to (set
  `GOOGLE_REDIRECT_URL` and `FRONTEND_URL` accordingly).
