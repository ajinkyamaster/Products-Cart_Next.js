# Mini E-Commerce Module

A professional e-commerce application demonstrating modern full-stack development practices with React, Node.js, and MongoDB.

## Project Overview

This is a lightweight e-commerce module that showcases best practices in:
- Frontend: React with Next.js (App Router) for server-side rendering and optimized performance
- Backend: Node.js with Express for RESTful API design
- Database: MongoDB for document storage
- Containerization: Docker and Docker Compose for reproducible deployments

The application is intentionally scoped to essential features, focusing on clean code and proper architecture.

## Tech Stack

- **Frontend**: Next.js 15, React 19, CSS Modules
- **Backend**: Node.js, Express 4.18, Mongoose 8.0
- **Database**: MongoDB 6.0
- **Containerization**: Docker, Docker Compose
- **State Management**: React Context API

## Features

### Frontend
- **Product Listing**: Responsive grid displaying products with images, names, and prices
- **Shopping Cart**: Full-featured cart with quantity controls and item removal
- **State Persistence**: Cart state persists across page navigation using Context API
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Clean UI**: Minimal, modern interface with neutral color palette

### Backend
- **RESTful API**: Well-structured endpoints following REST conventions
- **Product Management**: Fetch product catalog from MongoDB
- **Cart Validation**: Request validation for cart submissions
- **Error Handling**: Centralized error handling with appropriate HTTP status codes
- **Database Seeding**: Automatic population of sample products on startup

## Environment Variables

### Backend (.env)
```
MONGODB_URI=mongodb://mongo:27017/ecommerce
PORT=5000
NODE_ENV=development
```

### Frontend (Environment)
```
NEXT_PUBLIC_API_URL=http://backend:5000
```

These are pre-configured in the Docker setup.

## API Endpoints

### Products
- `GET /api/products` - Fetch all products
  - Response: Array of product objects with id, name, price, image

### Cart
- `POST /api/cart` - Submit cart data
  - Request: `{ items: [{ id, name, price, quantity, image }] }`
  - Response: `{ success, message, data }`

## Getting Started

### Prerequisites

#### For Docker Setup (Recommended)
- Docker ([Install Docker](https://docs.docker.com/get-docker/))
- Docker Compose (included with Docker Desktop)

#### For Local Development
- Node.js 18+ ([Install Node.js](https://nodejs.org/))
- MongoDB 6.0+ (local or Docker container)
- npm (comes with Node.js)

## Docker Setup (Recommended)

### Quick Start - One Command

```bash
docker-compose up --build
```

**First run takes 5-10 minutes** (pulling images, installing dependencies, building apps, seeding database).

### What Happens Automatically
1. **MongoDB Container** starts with persistent volume storage
2. **Database seeding** populates 6 sample products
3. **Backend server** starts on port 5000
4. **Frontend server** starts on port 3000 and is ready for use

### Access the Application

| Service | URL | Purpose |
|---------|-----|---------|
| Frontend | http://localhost:3000 | Shop interface |
| Backend API | http://localhost:5000 | REST API |
| API Health Check | http://localhost:5000/health | Service status |
| MongoDB | localhost:27017 | Database |

### Docker Commands Reference

```bash
# Start all services
docker-compose up

# Start in background (detached mode)
docker-compose up -d

# View logs
docker-compose logs -f

# View logs for specific service
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f mongo

# Stop all services
docker-compose down

# Stop and remove volumes (clears database)
docker-compose down -v

# Rebuild images after code changes
docker-compose up --build

# Rebuild specific service
docker-compose up --build backend
```

### Docker Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Docker Compose Network                    │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────┐   ┌──────────────┐   ┌───────────────┐   │
│  │   Frontend   │   │   Backend    │   │    MongoDB    │   │
│  │ (Next.js)    │   │ (Express)    │   │     6.0       │   │
│  │              │   │              │   │               │   │
│  │ Port: 3000   │   │ Port: 5000   │   │ Port: 27017   │   │
│  └──────────────┘   └──────────────┘   └───────────────┘   │
│        ↓                    ↓                    ↑           │
│   localhost:3000    localhost:5000         Acts as data    │
│                                             store for       │
│                                            both services    │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

### Docker Troubleshooting

**Images still building after 10+ minutes:**
```bash
docker-compose logs -f
# Watch for specific error messages
```

**Frontend shows "Failed to load products":**
- Backend may still be starting. Wait 1-2 more minutes
- Check: `docker-compose logs -f backend`

**Port already in use (3000, 5000, or 27017):**
Edit `docker-compose.yml`:
```yaml
services:
  mongo:
    ports:
      - '27018:27017'  # Change first number
  backend:
    ports:
      - '5001:5000'    # Change first number
  frontend:
    ports:
      - '3001:3000'    # Change first number
```

**Reset everything to fresh state:**
```bash
docker-compose down -v
docker system prune -a
docker-compose up --build
```

## Local Development (Without Docker)

### Setup Steps

1. **Ensure MongoDB is running:**
   ```bash
   # Option A: Use Docker for just MongoDB
   docker run -d -p 27017:27017 --name ecommerce-mongo mongo:6.0
   
   # Option B: Use local MongoDB installation
   mongod
   ```

2. **Backend setup:**
   ```bash
   cd backend
   npm install
   npm run dev
   ```
   
   Backend runs on `http://localhost:5000`

3. **Frontend setup** (in a new terminal):
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   
   Frontend runs on `http://localhost:3000`

### Environment Variables for Local Development

Create `.env` file in backend directory:
```
MONGODB_URI=mongodb://localhost:27017/ecommerce
PORT=5000
NODE_ENV=development
```

Frontend automatically uses `http://localhost:5000` as the API URL.

## Usage

1. **Browse Products**: The home page displays a grid of available products
2. **Add to Cart**: Click "Add to Cart" on any product
3. **View Cart**: Click "Cart" in the header to view your shopping cart
4. **Manage Cart**: 
   - Adjust quantities using + and − buttons
   - Remove items with the Remove button
   - View total items and cart value
5. **Continue Shopping**: Click "Products" to return to the product listing

## Code Quality

- **Modular Architecture**: Clear separation of concerns with dedicated folders for models, controllers, routes
- **Meaningful Naming**: Descriptive names for files, functions, and variables
- **Responsive Design**: CSS media queries for mobile, tablet, and desktop
- **No UI Libraries**: Pure CSS Modules for styling without external UI frameworks

## Constraints & Scope

This project intentionally excludes:
- Authentication and user management
- Payment processing
- Search, filtering, or sorting
- Admin panel
- UI component libraries
- Testing frameworks
- Complex animations

The focus is on clean, maintainable code demonstrating fundamental web development skills.

## Troubleshooting

### Port Already in Use
If ports 3000, 5000, or 27017 are in use, modify the port mappings in `docker-compose.yml`

### MongoDB Connection Issues
Ensure the `mongo` service is fully healthy before the backend starts (Docker Compose health check handles this)

### Frontend Cannot Connect to Backend
Verify the `NEXT_PUBLIC_API_URL` environment variable is correctly set to `http://backend:5000` in Docker Compose

