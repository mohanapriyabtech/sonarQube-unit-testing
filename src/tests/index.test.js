const request =  require('supertest')
const server =  require('../server')
const app = request(server)
describe('Get Endpoints', () => {
    it('Get', async () => {
        const res =  await app
        .get('/')
        .send({
            name:  'test ran successfully',
        });
        expect(res.statusCode).toEqual(200);
        // expect(res.body).toHaveProperty('name');
        // expect(res.body).toHaveProperty('status');
    })
})
afterAll(async () => {
    server.close();
});

// jest.config.js
module.exports = {
    // other Jest configurations...
    testResultsProcessor: 'jest-sonar-reporter',
  };
  