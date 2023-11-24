/*
  Test suite for the 'calculateNumber' function.

  This suite verifies the behaviour of the calculateNumber function
  in rounding and summing integer and decimal values.
*/

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  function testRoundingBehavior(description, a, b, expected) {
    it(description, () => {
      assert.strictEqual(calculateNumber(a, b), expected);
    });
  }

  // Basic test cases
  testRoundingBehavior('should round and return the sum for integer values', 1, 3, 4);
  testRoundingBehavior('should round and return the sum for decimal values with one decimal place', 1, 3.7, 5);
  testRoundingBehavior('should round and return the sum for decimal values with two decimal places', 1.2, 3.7, 5);
  testRoundingBehavior('should round and return the sum for decimal values with two decimal places', 1.5, 3.7, 6);
  testRoundingBehavior('should round down both a and b when they have fractional parts', 1.0, 2.0, 3);
  testRoundingBehavior('should round down b when it has a fractional part', 1.0, 2.4, 3);
  testRoundingBehavior('should round down a and b when they both have fractional parts', 1.4, 2.4, 3);
  testRoundingBehavior('should round down a when it has a fractional part', 1.4, 2.0, 3);
  testRoundingBehavior('should round up b when it has a fractional part', 1.0, 2.5, 4);
  testRoundingBehavior('should round up both a and b when they have fractional parts', 2.6, 2.5, 6);
  testRoundingBehavior('should round up a when it has a fractional part', 2.6, 2.0, 5);
  testRoundingBehavior('should round down both a and b when they have fractional parts with trailing 9\'s', 2.499999, 3.499999, 5);
});
