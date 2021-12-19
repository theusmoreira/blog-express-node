import request from 'supertest';

import { app } from '@/app';

describe('CreateCategoryController', () => {
  it('should be able to create a new category', async () => {
    const response = await request(app).post('/api/v1/categories').send({
      name: 'Lazer',
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('Lazer');
  });

  it('should not be able to create a new category with name already exits', async () => {
    await request(app).post('/api/v1/categories').send({
      name: 'Lazer',
    });

    const response = await request(app).post('/api/v1/categories').send({
      name: 'Lazer',
    });

    expect(response.status).toBe(400);
  });
});
