/*
  4-payment.test.js

  This test suite verifies the behavior of the 'sendPaymentRequestToApi' function
  in 4-payment.js. It uses sinon to stub the 'calculateNumber' function from the
  'Utils' module, ensuring it always returns 10. The test also checks if the
  correct message is logged to the console.
*/
const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('stubs Utils.calculateNumber and logs the correct message', () => {
    // Stub Utils.calculateNumber to always return 10
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Use sinon.spy to spy on console.log
    const consoleLogSpy = sinon.spy(console, 'log');

    // Call the function that we are testing
    sendPaymentRequestToApi(100, 20);

    // Assert that the stub was called with the correct arguments
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;

    // Assert that console.log was called with the correct message
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;

    // Restore the stub and the spy to their original states
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
