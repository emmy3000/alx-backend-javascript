/* 5-payment.js

This module defines the sendPaymentRequestToApi function, which takes two arguments:
- totalAmount: The total amount for the payment.
- totalShipping: The total shipping cost for the payment.

The function calls the Utils.calculateNumber function with type 'SUM',
totalAmount as a, totalShipping as b, and logs the result message to the console.
*/

const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
