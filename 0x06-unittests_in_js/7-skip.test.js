/*
  7-skip.test.js

  This test suite demonstrates the use of skipping tests in Mocha
  with the help of the 'it.skip()' method.
  The suite includes tests for checking equality of various numbers.

  Tip: Skipping tests is helpful when you want to temporarily exclude a test
  without removing it, such as when investigating failing tests or running
  tests in specific environments.
*/

const { expect } = require('chai');

// Test suite for comparing numbers
describe('Testing numbers', () => {
  it('1 is equal to 1', () => {
    expect(1 === 1).to.be.true;
  });

  it('2 is equal to 2', () => {
    expect(2 === 2).to.be.true;
  });

  // Skipped test case: 1 is equal to 3
  // This test is intentionally skipped and won't be executed
  it.skip('1 is equal to 3', () => {
    expect(1 === 3).to.be.true;
  });

  it('3 is equal to 3', () => {
    expect(3 === 3).to.be.true;
  });

  it('4 is equal to 4', () => {
    expect(4 === 4).to.be.true;
  });

  it('5 is equal to 5', () => {
    expect(5 === 5).to.be.true;
  });

  it('6 is equal to 6', () => {
    expect(6 === 6).to.be.true;
  });

  it('7 is equal to 7', () => {
    expect(7 === 7).to.be.true;
  });
});
