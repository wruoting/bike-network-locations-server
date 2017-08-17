import Request from 'supertest';
import { expect } from 'chai';
import { app } from '../app';

const request = Request.agent(app.listen());

describe('POST /api/reviews/:networkId/:stationId', () => {
  it('responds with an object with userName', (done) => {
    request
      .post('/api/reviews/598e8b84705c2040b30fa9c1/598e95fd322d3c99d288bfd4')
      .send({ text: 'this is a review' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((ctx) => {
        expect(ctx.body).to.be.an('object');
        expect(ctx.body).to.have.property('userName');
      })
      .expect(200, done);
  });
});
