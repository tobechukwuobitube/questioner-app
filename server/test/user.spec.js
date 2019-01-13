const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');


let should = chai.should();
chai.use(chaiHttp);

describe('users', () => {
  afterEach((done) => {
    done();
  });

  
  describe('userRoutes', () => {
    const request = chai.request(app);

    it('it should GET a particular user', (done) => {
      request.get('/users/:id')
      .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.should.be.json;
        done();      
      });
    });
  });

  describe('userRoutes', () => {
    const request = chai.request(app);

    it('it should POST a user to users', (done) => {
      request.post('/users')
      .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.should.be.json;
        done();      
      });
    });
  });

});