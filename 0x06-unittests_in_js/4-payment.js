/*
  4-payment.js

  This module defines the 'sendPaymentRequestToApi' function, which simulates
  sending a payment request to an API by utilizing the 'calculateNumber' function
  from the 'Utils' module. It logs the total result to the console.
*/
const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
