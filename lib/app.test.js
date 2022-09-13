import request from 'supertest';
import app from './app.js';
  
  it('Returns 404 not found on bad route', async () => {
    const { text, status } = await request(app)
    .get('/not-found');
  
    expect(status).toBe(404);
    expect(text).toBe('Not Found');
  });

  it('Returns 200 on #GET cats', async () => {
    const { text, status } = await request(app)
    .get('/api/v1/cats');
  
    expect(status).toBe(200);
    expect.any(String);
  });