const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');


let should = chai.should();
chai.use(chaiHttp);

describe('meetups', () => {
  afterEach((done) => {
    done();
  });

  describe('meetupRoutes', () => {
    const request = chai.request(app);

    it('it should GET all meetups', (done) => {
      request.get('/api/v1/meetups/:id')
      .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.should.be.json;
        done();      
      });
    });
  });
  
  describe('meetupRoutes', () => {
    const request = chai.request(app);

    it('it should GET a particular meetup', (done) => {
      request.get('/api/v1/meetups/:id')
      .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.should.be.json;
        done();      
      });
    });
  });

  describe('meetupRoutes', () => {
    const request = chai.request(app);

    it('it should POST a meetup to meetups', (done) => {
      request.post('/api/v1/meetups')
      .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.should.be.json;
        done();      
      });
    });
  });

  describe('meetupRoutes', () => {
    const request = chai.request(app);

    it('it should POST as RSVP to a particular meetup', (done) => {
      request.post('/api/v1/meetups/:id/rsvp')
      .send({ 'name': 'Frank' })
      .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('Updated');
        done();      
      });
    });
  });

  describe('meetupRoutes', () => {
    const request = chai.request(app);

    it('it should DELETE a particular meetup', (done) => {
      request.delete('/api/v1/meetups/:id')
      .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.should.be.json;
        done();      
      });
    });
  });

});