# Express.js Assignment

This is a RESTful API implementation using Express.js that demonstrates basic CRUD operations for users and products.

## Project Structure

```
express-assignment/
│-- routes/
│    ├── userRoutes.js
│    ├── productRoutes.js
│-- middleware/
│    ├── logger.js
│-- controllers/
│    ├── userController.js
│    ├── productController.js
│-- index.js
│-- package.json
│-- README.md
│-- .env
```

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a .env file with the following content:
   ```
   PORT=3000
   NODE_ENV=development
   ```

3. Start the server:
   ```bash
   node index.js
   ```

## API Endpoints

### Users

- GET /api/users - Get all users
- GET /api/users/:id - Get a specific user
- POST /api/users - Create a new user
- PUT /api/users/:id - Update a user
- DELETE /api/users/:id - Delete a user

### Products

- GET /api/products - Get all products
- GET /api/products/:id - Get a specific product
- POST /api/products - Create a new product
- PUT /api/products/:id - Update a product
- DELETE /api/products/:id - Delete a product

## Request Examples

### Create a User
```bash
POST http://localhost:3000/api/users
Content-Type: application/json

{
    "name": "John Doe",
    "email": "john@example.com"
}
```

### Create a Product
```bash
POST http://localhost:3000/api/products
Content-Type: application/json

{
    "name": "Sample Product",
    "price": 99.99,
    "description": "A sample product description"
}
```

## Features

- RESTful API design
- Middleware for request logging
- Error handling middleware
- Environment variable configuration
- Modular code structure with routes and controllers
