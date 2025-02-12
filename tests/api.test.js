const request = require('supertest');
const app = require('../index');

describe('API Endpoints', () => {
    let userId;
    let productId;

    // User Tests
    describe('User Endpoints', () => {
        it('should create a new user', async () => {
            const res = await request(app)
                .post('/api/users')
                .send({
                    name: 'Test User',
                    email: 'test@example.com'
                });
            expect(res.statusCode).toBe(201);
            expect(res.body).toHaveProperty('id');
            expect(res.body.name).toBe('Test User');
            userId = res.body.id;
        });

        it('should get all users', async () => {
            const res = await request(app)
                .get('/api/users');
            expect(res.statusCode).toBe(200);
            expect(Array.isArray(res.body)).toBeTruthy();
        });

        it('should get a single user', async () => {
            const res = await request(app)
                .get(`/api/users/${userId}`);
            expect(res.statusCode).toBe(200);
            expect(res.body.id).toBe(userId);
        });

        it('should update a user', async () => {
            const res = await request(app)
                .put(`/api/users/${userId}`)
                .send({
                    name: 'Updated User',
                    email: 'updated@example.com'
                });
            expect(res.statusCode).toBe(200);
            expect(res.body.name).toBe('Updated User');
        });

        it('should delete a user', async () => {
            const res = await request(app)
                .delete(`/api/users/${userId}`);
            expect(res.statusCode).toBe(204);
        });
    });

    // Product Tests
    describe('Product Endpoints', () => {
        it('should create a new product', async () => {
            const res = await request(app)
                .post('/api/products')
                .send({
                    name: 'Test Product',
                    price: 99.99,
                    description: 'Test description'
                });
            expect(res.statusCode).toBe(201);
            expect(res.body).toHaveProperty('id');
            expect(res.body.name).toBe('Test Product');
            productId = res.body.id;
        });

        it('should get all products', async () => {
            const res = await request(app)
                .get('/api/products');
            expect(res.statusCode).toBe(200);
            expect(Array.isArray(res.body)).toBeTruthy();
        });

        it('should get a single product', async () => {
            const res = await request(app)
                .get(`/api/products/${productId}`);
            expect(res.statusCode).toBe(200);
            expect(res.body.id).toBe(productId);
        });

        it('should update a product', async () => {
            const res = await request(app)
                .put(`/api/products/${productId}`)
                .send({
                    name: 'Updated Product',
                    price: 199.99,
                    description: 'Updated description'
                });
            expect(res.statusCode).toBe(200);
            expect(res.body.name).toBe('Updated Product');
        });

        it('should delete a product', async () => {
            const res = await request(app)
                .delete(`/api/products/${productId}`);
            expect(res.statusCode).toBe(204);
        });
    });

    // Error Tests
    describe('Error Handling', () => {
        it('should return 404 for non-existent user', async () => {
            const res = await request(app)
                .get('/api/users/999');
            expect(res.statusCode).toBe(404);
            expect(res.body).toHaveProperty('message', 'User not found');
        });

        it('should return 404 for non-existent product', async () => {
            const res = await request(app)
                .get('/api/products/999');
            expect(res.statusCode).toBe(404);
            expect(res.body).toHaveProperty('message', 'Product not found');
        });

        it('should return 404 for invalid route', async () => {
            const res = await request(app)
                .get('/api/invalid');
            expect(res.statusCode).toBe(404);
            expect(res.body).toHaveProperty('message', 'Route not found');
        });
    });
});
