/*
  Test suite for the 'calculateNumber' function.

  This suite verifies the behavior of the calculateNumber function
  in rounding and summing integer and decimal values.
*/

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  // Basic test cases
  it('should round and return the sum for integer values', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round and return the sum for decimal values with one decimal place', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should round and return the sum for decimal values with two decimal places', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should round and return the sum for decimal values with two decimal places', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should round down both a and b when they have fractional parts', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('should round down b when it has a fractional part', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('should round down a and b when they both have fractional parts', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('should round down a when it has a fractional part', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('should round up b when it has a fractional part', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('should round up both a and b when they have fractional parts', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('should round up a when it has a fractional part', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('should round down both a and b when they have fractional parts with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
