/* 5-payment.test.js

This test suite covers the functionality of the sendPaymentRequestToApi function in 5-payment.js.
It includes tests for different scenarios, ensuring correct behavior when calling the function.

The tests use Chai for assertions and Sinon for creating spies.

Test Cases:
1. Logs the correct message for totalAmount 100 and totalShipping 20:
   - Verifies that the console is logging the string 'The total is: 120'.
   - Verifies that the console.log is only called once.

2. Logs the correct message for totalAmount 10 and totalShipping 10:
   - Verifies that the console is logging the string 'The total is: 20'.
   - Verifies that the console.log is only called once.
*/

const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    // Create a spy on console.log before each test
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the spy to its original state after each test
    consoleLogSpy.restore();
  });

  it('logs the correct message for totalAmount 100 and totalShipping 20', () => {
    // Call the function that we are testing
    sendPaymentRequestToApi(100, 20);

    // Assert that console.log was called with the correct message
    expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;

    // Assert that console.log was only called once
    expect(consoleLogSpy.calledOnce).to.be.true;
  });

  it('logs the correct message for totalAmount 10 and totalShipping 10', () => {
    // Call the function that we are testing
    sendPaymentRequestToApi(10, 10);

    // Assert that console.log was called with the correct message
    expect(consoleLogSpy.calledWith('The total is: 20')).to.be.true;

    // Assert that console.log was only called once
    expect(consoleLogSpy.calledOnce).to.be.true;
  });
});
