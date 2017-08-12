import Request from 'supertest';
import app from '../app';

const request = Request.agent(app.listen());

describe('GET /api/networks', () => {
  it('respond with json', (done) => {
    request
      .get('/api/networks')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('GET /api/networks/:parentNetwork', () => {
  it('respond with json', (done) => {
    request
      .get('/api/networks/598e8b84705c2040b30fa9c1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
