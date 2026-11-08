# syntax=docker/dockerfile:1

# ---------- build stage ----------
FROM golang:1.25-alpine AS builder

WORKDIR /src

# Install build dependencies (git for go modules, ca-certificates for TLS)
RUN apk add --no-cache git ca-certificates

# Cache module downloads separately from source changes
COPY go.mod go.sum ./
RUN go mod download

COPY . .

# Build a static Linux binary
RUN CGO_ENABLED=0 GOOS=linux go build \
    -trimpath \
    -ldflags="-s -w" \
    -o /out/kilas .

# ---------- runtime stage ----------
FROM alpine:3.21

RUN apk add --no-cache ca-certificates tzdata wget

# Run as a non-root user
RUN addgroup -S app && adduser -S -G app app

WORKDIR /app

COPY --from=builder /out/kilas ./kilas

# Uploaded images are written here (mounted as a volume in compose)
RUN mkdir -p /app/public/uploads/images && chown -R app:app /app

USER app

ENV APP_ADDRESS=0.0.0.0 \
    APP_PORT=8080 \
    GIN_MODE=release

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
    CMD wget -q -O /dev/null http://127.0.0.1:${APP_PORT}/api/ping || exit 1

ENTRYPOINT ["./kilas"]
