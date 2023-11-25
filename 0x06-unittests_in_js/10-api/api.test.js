/* API Test Suite
   This test suite checks the functionality of the API server defined in api.js.
   It includes tests for various endpoints:
   1. GET /available_payments - Tests the correct response for available payment methods.
   2. POST /login - Tests the correct response for the login endpoint.
   3. GET / - Tests the correct response for the root endpoint.
   4. GET /cart/:id - Tests the correct response for the /cart/:id endpoint.

   Test cases cover correct status codes and response bodies.

   The server should be running on localhost port 7865.
*/

const request = require('request');
const { expect } = require('chai');

// Define the test suite
describe('GET / Cart page', () => {
  // Test case for the root endpoint
  it('correct status code and body for / route', (done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  // Test case for the valid :id in /cart/:id
  it('correct status code and body for /cart/:id with valid :id', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  // Test case for negative number in :id
  it('correct status code for /cart/:id with negative number in :id', (done) => {
    request.get('http://localhost:7865/cart/-23', (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  // Test case for non-numeric :id
  it('correct status code and body for /cart/:id with non-numeric :id', (done) => {
    request.get('http://localhost:7865/cart/c3p0-8o82-3fs1', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      // Check if the response body contains the expected content
      expect(body).to.include('Cannot GET /cart/c3p0-8o82-3fs1');
      done();
    });
  });

  // Test case for the /available_payments endpoint
  it('returns the correct payment methods', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      };
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });

  // Test case for the /login endpoint
  it('returns the correct welcome message', (done) => {
    const userData = { userName: 'Betty' };
    request.post(
      {
        url: 'http://localhost:7865/login',
        body: JSON.stringify(userData),
        headers: { 'Content-Type': 'application/json' },
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      }
    );
  });
});
