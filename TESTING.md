# API Testing Guide

This document provides detailed instructions for testing all endpoints in the Express.js application.

## Prerequisites

1. Install [Postman](https://www.postman.com/downloads/) (Recommended for testing)
2. Ensure the server is running (`node index.js`)
3. Base URL: `http://localhost:3000`

## Test Cases

### User Endpoints

#### 1. Create User (POST /api/users)
```http
POST http://localhost:3000/api/users
Content-Type: application/json

{
    "name": "John Doe",
    "email": "john@example.com"
}
```
Expected Response (201 Created):
```json
{
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
}
```

#### 2. Get All Users (GET /api/users)
```http
GET http://localhost:3000/api/users
```
Expected Response (200 OK):
```json
[
    {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com"
    }
]
```

#### 3. Get Single User (GET /api/users/:id)
```http
GET http://localhost:3000/api/users/1
```
Expected Response (200 OK):
```json
{
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
}
```

#### 4. Update User (PUT /api/users/:id)
```http
PUT http://localhost:3000/api/users/1
Content-Type: application/json

{
    "name": "John Updated",
    "email": "john.updated@example.com"
}
```
Expected Response (200 OK):
```json
{
    "id": 1,
    "name": "John Updated",
    "email": "john.updated@example.com"
}
```

#### 5. Delete User (DELETE /api/users/:id)
```http
DELETE http://localhost:3000/api/users/1
```
Expected Response (204 No Content)

### Product Endpoints

#### 1. Create Product (POST /api/products)
```http
POST http://localhost:3000/api/products
Content-Type: application/json

{
    "name": "Laptop",
    "price": 999.99,
    "description": "High-performance laptop"
}
```
Expected Response (201 Created):
```json
{
    "id": 1,
    "name": "Laptop",
    "price": 999.99,
    "description": "High-performance laptop"
}
```

#### 2. Get All Products (GET /api/products)
```http
GET http://localhost:3000/api/products
```
Expected Response (200 OK):
```json
[
    {
        "id": 1,
        "name": "Laptop",
        "price": 999.99,
        "description": "High-performance laptop"
    }
]
```

#### 3. Get Single Product (GET /api/products/:id)
```http
GET http://localhost:3000/api/products/1
```
Expected Response (200 OK):
```json
{
    "id": 1,
    "name": "Laptop",
    "price": 999.99,
    "description": "High-performance laptop"
}
```

#### 4. Update Product (PUT /api/products/:id)
```http
PUT http://localhost:3000/api/products/1
Content-Type: application/json

{
    "name": "Updated Laptop",
    "price": 1099.99,
    "description": "Updated high-performance laptop"
}
```
Expected Response (200 OK):
```json
{
    "id": 1,
    "name": "Updated Laptop",
    "price": 1099.99,
    "description": "Updated high-performance laptop"
}
```

#### 5. Delete Product (DELETE /api/products/:id)
```http
DELETE http://localhost:3000/api/products/1
```
Expected Response (204 No Content)

## Error Cases to Test

1. **Not Found (404)**
   - Try to access a non-existent user or product
   ```http
   GET http://localhost:3000/api/users/999
   ```
   Expected Response:
   ```json
   {
       "message": "User not found"
   }
   ```

2. **Invalid Route (404)**
   - Try to access an invalid route
   ```http
   GET http://localhost:3000/api/invalid
   ```
   Expected Response:
   ```json
   {
       "message": "Route not found"
   }
   ```

3. **Server Error (500)**
   - The server will handle unexpected errors and return:
   ```json
   {
       "message": "Something went wrong!",
       "error": {} // In development mode, this will contain the error message
   }
   ```

## Testing with cURL

Here are cURL commands for testing the endpoints:

### Users
```bash
# Create User
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com"}'

# Get All Users
curl http://localhost:3000/api/users

# Get Single User
curl http://localhost:3000/api/users/1

# Update User
curl -X PUT http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"John Updated","email":"john.updated@example.com"}'

# Delete User
curl -X DELETE http://localhost:3000/api/users/1
```

### Products
```bash
# Create Product
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Laptop","price":999.99,"description":"High-performance laptop"}'

# Get All Products
curl http://localhost:3000/api/products

# Get Single Product
curl http://localhost:3000/api/products/1

# Update Product
curl -X PUT http://localhost:3000/api/products/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated Laptop","price":1099.99,"description":"Updated high-performance laptop"}'

# Delete Product
curl -X DELETE http://localhost:3000/api/products/1
```

## Automated Testing Script

Let's create a simple test script to verify all endpoints:
