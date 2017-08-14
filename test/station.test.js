import Request from 'supertest';
import { expect } from 'chai';
import { app } from '../app';

const request = Request.agent(app.listen());

describe('/api/station Endpoint Tests', () => {
  describe('GET /api/station/:stationId', () => {
    it('responds with an json object', (done) => {
      request
        .get('/api/stations/598e95fd322d3c99d288bfd4')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect((ctx) => {
          expect(ctx.body).to.be.an('object');
          expect(ctx.body).to.have.property('name');
        })
        .expect(200, done);
    });
  });

  describe('PUT /api/stations/:stationId', () => {
    it('responds with a json array and a changed emptySlots field', (done) => {
      request
        .put('/api/stations/598e95fd322d3c99d288bfd4')
        .send({ emptySlots: 2 })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect((ctx) => {
          expect(ctx.body).to.be.an('object');
          expect(ctx.body).to.have.property('name');
          expect(ctx.body.empty_slots).to.equal(2);
        })
        .expect(200, done);
    });
  });
});
