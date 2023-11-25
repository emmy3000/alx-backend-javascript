/*
  8-api/api.test.js

  This file contains integration tests for the Express application in api.js.
  It uses the 'request' module to make HTTP requests and checks the responses.

  The test suite 'Index page' includes tests for:
  - Correct status code for the index page
  - Correct result (message) for the index page
  - Other potential tests related to the index page

  Note: To run these tests successfully, make sure the Express server is running.
*/

const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  // Check if the status code is 200 and the body is correct for the / route
  it('GET / correct response status', () => new Promise((done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  }));
});
