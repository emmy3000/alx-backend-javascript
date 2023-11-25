/* API Test Suite
   This test suite checks the functionality of the API server defined in api.js.
   It includes tests for the root endpoint ('/') and the new '/cart/:id' endpoint.

   Test cases cover correct status codes and response bodies for valid and invalid cart IDs.
*/

const request = require('request');
const { expect } = require('chai');

// Define the test suite
describe('Index page', () => {
  // Test case for the root endpoint
  it('GET / correct status code and body for / route', (done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  // Test case for the valid :id in /cart/:id
  it('GET / correct status code and body for /cart/:id with valid :id', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  // Test case for negative number in :id
  it('GET / correct status code for /cart/:id with negative number in :id', (done) => {
    request.get('http://localhost:7865/cart/-23', (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  // Test case for non-numeric :id
  it('GET / correct status code and body for /cart/:id with non-numeric :id', (done) => {
    request.get('http://localhost:7865/cart/c3p0-8o82-3fs1', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      // Check if the response body contains the expected content
      expect(body).to.include('Cannot GET /cart/c3p0-8o82-3fs1');
      done();
    });
  });
});
