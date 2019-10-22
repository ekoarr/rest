import *  as supertest from 'supertest';
import server from './../index';
// import { logger } from '@config/logger';
describe('User API', () => {
  let request = null;
  beforeAll( () => {
     request = supertest(server);
  });
  afterAll( () => {
    server.close();
  });
  
  const throwIfError = (err, res) => { if (err) throw err }
  it('Article get request',   (done) => {
     request
      .get(`/article`)
      .expect(200)
      .end((err, res)=>{
        if (err) return done(err);
        done();
      })
  })
});