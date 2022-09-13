import request from 'supertest';
import app from './app.js';
  
  it('Returns 404 not found on bad route', async () => {
    const { text, status } = await request(app)
    .get('/not-found');
  
    expect(status).toBe(404);
    expect(text).toBe('Not Found');
  });

  it('Returns 200 on #GET sauces', async () => {
    const { text, status } = await request(app)
    .get('/api/v1/sauces');
  
    expect(status).toBe(200);
    expect.any(String);
  });

  it('Returns 200 on #POST', async () => {
    await request(app)
      .post('/api/v1/sauces')
      .send({ name: 'kashi sauce', flavor: '5 stars' })
      .expect(200);
    await request(app).get('/api/v1/sauces').expect(200);
  });