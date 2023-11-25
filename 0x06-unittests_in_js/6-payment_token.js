/* 
  6-payment_token.js

  This module defines the 'getPaymentTokenFromAPI' function, which takes a boolean argument:
  - success: A flag indicating whether the API call should be successful or not.

  When success is true, the function returns a resolved promise with the object:
  { data: 'Successful response from the API' }

  Otherwise, the function returns a resolved promise without any value for failure.
*/
function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  } else {
    return Promise.resolve(); // Resolve without any value for failure
  }
}

module.exports = getPaymentTokenFromAPI;
