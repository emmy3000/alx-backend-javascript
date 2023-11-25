/* 
  6-payment_token.test.js

  This test suite covers the functionality of the getPaymentTokenFromAPI function in 6-payment_token.js.
  It includes tests for both success and failure scenarios.

  Test 1:
  - It calls getPaymentTokenFromAPI with success as true.
  - Verifies that the function returns a resolved promise with the expected success response.
  
  Test 2:
  - It calls getPaymentTokenFromAPI with success as false.
  - Verifies that the function returns a resolved promise with undefined for failure response.
*/
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('returns a resolved promise with success response', (done) => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        // Assert that the result is the expected object
        expect(result).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Call done to signal the end of the async test
      })
      .catch((error) => {
        done(error); // Call done with an error if the promise is rejected
      });
  });

  it('returns a resolved promise for failure response', (done) => {
    getPaymentTokenFromAPI(false)
      .then((result) => {
        // Assert that the result is undefined for failure
        expect(result).to.be.undefined;
        done(); // Call done to signal the end of the async test
      })
      .catch((error) => {
        done(error); // Call done with an error if the promise is rejected
      });
  });
});
