import Request from 'supertest';
import { expect } from 'chai';
import { app } from '../app';

const request = Request.agent(app.listen());

describe('Server', () => {
  describe('GET /api/networks', () => {
    it('responds with a json array of objects', (done) => {
      request
        .get('/api/networks')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect((ctx) => {
          expect(ctx.body).to.be.an('array');
          expect(ctx.body[0]).to.be.an('object');
          expect(ctx.body[0]).to.have.property('name');
        })
        .expect(200, done);
    });
  });

  describe('GET /api/networks/:parentNetwork', () => {
    it('responds with a json array', (done) => {
      request
        .get('/api/networks/598e8b84705c2040b30fa9c1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect((ctx) => {
          expect(ctx.body).to.be.an('array');
          expect(ctx.body[0]).to.be.an('object');
          expect(ctx.body[0]).to.have.property('name');
        })
        .expect(200, done);
    });
  });
});
