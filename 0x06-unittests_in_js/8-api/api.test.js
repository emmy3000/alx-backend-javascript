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

  // Check if the status code is 404 for the /other route
  it('correct status code for /other route', () => new Promise((done) => {
    request.get('http://localhost:7865/other', (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  }));

  // Check if the status code is 404 for the /about route
  it('correct status code for /about route', () => new Promise((done) => {
    request.get('http://localhost:7865/about', (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  }));

  // Check if the status code is 404 for the /login route
  it('correct status code for /login route', () => new Promise((done) => {
    request.get('http://localhost:7865/login', (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  }));

  // Check if the status code is 404 for the /contact route
  it('correct status code for /contact route', () => new Promise((done) => {
    request.get('http://localhost:7865/contact', (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  }));

  // Check if the status code is 404 for the /services route
  it('correct status code for /services route', () => new Promise((done) => {
    request.get('http://localhost:7865/services', (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  }));
});
