# Docker Compose Guide 🚀

This guide explains a basic Docker Compose setup for a **backend** and **frontend** service.

---

## 1. Services Overview

Every `docker-compose.yaml` file defines **services** (containers) and their configuration:

```yaml
services:
  backend:
    build: ./backend
    ports:
      - "5000:6000"
    # Uncomment to pass environment variables
    # environment:
    #   - PORT=${PORT}
    # env_file:
    #   - ./backend/.env

  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    depends_on:
      - backend
    command: ["npm", "run", "dev", "--", "--host"]
```

## 2. What Each Section Means

- **services** → each service represents a container (backend, frontend, db, etc.).
- **backend / frontend** → the name of the service (can be any identifier).
- **build** → build the image from the folder containing the Dockerfile.
- **ports** → maps host machine port → container port (`host:container`).
- **environment** → pass environment variables into the container.
- **env_file** → reference a `.env` file for environment variables.
- **depends_on** → ensures one service starts before another (start order only, not readiness).
- **command** → override the default command in the Dockerfile.

### .env Files in Docker Compose

- `.env` files in the **parent folder** (where `docker-compose.yml` is located) **work automatically**.
- `.env` files inside **subfolders** (like `./backend/.env`) **do not automatically get picked up** unless you explicitly reference them in your `docker-compose.yml`:

```yaml
services:
  backend:
    build: ./backend
    env_file:
      - ./backend/.env
```
