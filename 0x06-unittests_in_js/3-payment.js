/*
  3-payment.js

  This module defines the 'sendPaymentRequestToApi 'function, which takes two arguments:
  - totalAmount: The total amount for a payment request.
  - totalShipping: The total shipping cost for a payment request.

  The function utilizes the Utils.calculateNumber function to calculate the sum
  of totalAmount and totalShipping.
  It then logs the result in the console with the message:
  'The total is: <result of the sum>'.
*/

const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
