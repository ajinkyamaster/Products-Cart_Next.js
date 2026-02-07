# Quick Start Guide

## One Command to Run Everything

```bash
docker-compose up --build
```

This single command will:
1. Build frontend and backend Docker images
2. Start MongoDB and seed it with sample products
3. Start the Express API server
4. Start the Next.js frontend

**Wait for the output to show:**
```
ecommerce-frontend | Ready in X.XXs
```

## Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/health

## First Time Setup

The first run will take longer because Docker needs to:
1. Download base images
2. Install dependencies
3. Build applications
4. Seed the database with 6 sample products

Be patient (~5-10 minutes on first run).

## Stop the Application

```bash
docker-compose down
```

This command safely stops and removes all containers while preserving the MongoDB data volume.

## Verify Everything Works

1. Open http://localhost:3000 in your browser
2. You should see a list of 6 products
3. Click "Add to Cart" on any product
4. Click "Cart" in the header to view your cart
5. Test adding/removing items

## Troubleshooting

### Still Loading After 5 minutes?
Check the logs:
```bash
docker-compose logs -f
```

### Frontend shows "Failed to load products"
The backend might not be fully started. The frontend retries automatically. Wait another minute.

### Ports Already in Use?
Edit `docker-compose.yml` and change the port mappings:
```yaml
  mongo:
    ports:
      - '27018:27017'  # Change this
  backend:
    ports:
      - '5001:5000'    # Change this
  frontend:
    ports:
      - '3001:3000'    # Change this
```

Then update `NEXT_PUBLIC_API_URL` in docker-compose.yml to `http://localhost:5001`

### Want to See API Responses Directly?
```bash
curl http://localhost:5000/api/products
```

## Project Structure at a Glance

- **frontend/** - Next.js React application
- **backend/** - Express.js REST API
- **docker-compose.yml** - Orchestrates all services

