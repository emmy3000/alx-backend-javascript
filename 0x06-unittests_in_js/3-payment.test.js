/*
  3-payment.test.js

  This test suite covers the functionality of the sendPaymentRequestToApi function in 3-payment.js.
  It includes two test cases:
  1. Ensures that sendPaymentRequestToApi calls Utils.calculateNumber with the correct arguments.
  2. Ensures that sendPaymentRequestToApi prints the correct message to the console.

  The tests utilize Chai for assertions and Sinon for spies to validate the behavior of the function.
*/

const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('calls Utils.calculateNumber with the correct arguments', () => {
    // Create a spy for Utils.calculateNumber
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // Call the function that we are testing
    sendPaymentRequestToApi(100, 20);

    // Assert that the spy was called with the correct arguments
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;

    // Restore the spy to its original state
    calculateNumberSpy.restore();
  });

  it('prints the correct message to the console', () => {
    // Use sinon.spy to spy on console.log
    const consoleLogSpy = sinon.spy(console, 'log');

    // Call the function that we are testing
    sendPaymentRequestToApi(100, 20);

    // Assert that console.log was called with the correct message
    expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;

    // Restore the spy to its original state
    consoleLogSpy.restore();
  });
});
