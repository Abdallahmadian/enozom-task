import request from 'supertest';
import app from '../app.js';

describe('API Endpoints', () => {
  it('GET /api/trains should return all trains', async () => {
    const res = await request(app).get('/api/trains');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('GET /api/cities should return all cities', async () => {
    const res = await request(app).get('/api/cities');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('GET /api/trips should return all trips', async () => {
    const res = await request(app).get('/api/trips');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('GET /api/trips/alex-to-cairo should return trips from Alexandria to Cairo', async () => {
    const res = await request(app).get('/api/trips/alex-to-cairo');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
