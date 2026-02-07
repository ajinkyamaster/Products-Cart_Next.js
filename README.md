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
- Docker
- Docker Compose

### Installation & Running

1. **Clone or navigate to the project directory:**
   ```bash
   cd E-commerce_assign
   ```

2. **Start all services:**
   ```bash
   docker-compose up --build
   ```

   This command will:
   - Build the frontend and backend images
   - Start MongoDB and seed it with sample products
   - Start the Express backend server
   - Start the Next.js frontend server

3. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - MongoDB: localhost:27017

4. **Stop all services:**
   ```bash
   docker-compose down
   ```

### Local Development (Without Docker)

1. **Start MongoDB locally** (or in a separate container)

2. **Backend setup:**
   ```bash
   cd backend
   npm install
   node seed.js
   npm run dev
   ```

3. **Frontend setup** (in a new terminal):
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

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

# Products-Cart_Next.js
