import request from 'supertest';

import { app } from '@/app';

describe('CreateUserController', () => {
  it('should be able to create a new user', async () => {
    const response = await request(app).post('/api/v1/users').send({
      name: 'John Doe',
      email: 'johndoe@example.com',
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('John Doe');
    expect(response.body.email).toBe('johndoe@example.com');
  });

  it('should not be able to create a new user with an existing email', async () => {
    await request(app).post('/api/v1/users').send({
      name: 'John Doe',
      email: 'johndoe@example.com',
    });

    const response = await request(app).post('/api/v1/users').send({
      name: 'John Doe 2',
      email: 'johndoe@example.com',
    });

    expect(response.status).toBe(400);
  });
});
