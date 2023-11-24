/*
  1-calcul.test.js

  This test suite covers the functionality of the calculateNumber function in 1-calcul.js.
  It includes test cases for various scenarios, ensuring correct behavior
  for 'SUM', 'SUBTRACT', and 'DIVIDE' types.
*/

const assert = require('assert');
const calculateNumber = require('./1-calcul');

// Helper function to test a specific operation type
function testOperation(type, description, a, b, expected) {
  test(`${type}: ${description}`, () => {
    assert.strictEqual(calculateNumber(type, a, b), expected);
  });
}

// Top-level describe block for the calculateNumber function
describe('calculateNumber', () => {
  // Tests for the 'SUM' operation
  describe('type == "SUM"', () => {
    testOperation('SUM', 'equal positive numbers', 2.0, 3.0, 5);
    testOperation('SUM', 'equal positive numbers (alternate)', 3.2, 1.9, 5);
    testOperation('SUM', 'equal negative numbers', -2.0, -3.0, -5);
    testOperation('SUM', 'equal negative numbers (alternate)', -3.2, -1.9, -5);
    testOperation('SUM', 'negative and positive numbers', -3.0, 3.0, 0);
    testOperation('SUM', 'positive and negative numbers', 3.0, -3.0, 0);
    testOperation('SUM', '0 and 0', 0.0, 0.0, 0);
  });

  // Tests for the 'SUBTRACT' operation
  describe('type == "SUBTRACT"', () => {
    testOperation('SUBTRACT', 'equal positive numbers', 2.0, 3.0, -1);
    testOperation('SUBTRACT', 'equal positive numbers (alternate)', 1.5, 1.5, 0);
    testOperation('SUBTRACT', 'equal negative numbers', -2.0, -3.0, 1);
    testOperation('SUBTRACT', 'equal negative numbers (alternate)', -1.5, -1.5, 0);
    testOperation('SUBTRACT', 'negative and positive numbers', -2.0, 2.0, -4.0);
    testOperation('SUBTRACT', 'positive and negative numbers', 2.0, -2.0, 4.0);
    testOperation('SUBTRACT', '0 and 0', 0.0, 0.0, 0);
  });

  // Tests for the 'DIVIDE' operation
  describe('type == "DIVIDE"', () => {
    testOperation('DIVIDE', 'positive numbers', 8.0, 2.0, 4.0);
    testOperation('DIVIDE', 'numbers with different signs', -7.0, 2.0, -3.5);
    testOperation('DIVIDE', 'numbers with different signs (alternate)', 7.0, -2.0, -3.5);
    testOperation('DIVIDE', 'negative numbers', -7.0, -2.0, 3.5);
    testOperation('DIVIDE', 'equal positive numbers', 2.0, 2.0, 1);
    testOperation('DIVIDE', 'equal negative numbers', -2.0, -2.0, 1);
    testOperation('DIVIDE', 'equal rounded up numbers', 2.6, 3.0, 1);
    testOperation('DIVIDE', 'equal rounded down numbers', 2.4, 2.0, 1);
    testOperation('DIVIDE', '0 and positive number', 0.0, 5.0, 0);
    testOperation('DIVIDE', '0 and negative number', 0.0, -5.0, -0);
    testOperation('DIVIDE', 'positive number and 0', 5.0, 0, 'Error');
    testOperation('DIVIDE', 'positive number and number rounded down to 0', 5.0, 0.2, 'Error');
    testOperation('DIVIDE', 'positive number and number rounded up to 0', 5.0, -0.2, 'Error');
    testOperation('DIVIDE', 'negative number and 0', -5.0, 0, 'Error');
    testOperation('DIVIDE', 'negative number and number rounded down to zero', -5.0, 0.2, 'Error');
    testOperation('DIVIDE', 'negative number and number rounded up to zero', -5.0, -0.2, 'Error');
    testOperation('DIVIDE', '0 and 0', 0.0, 0.0, 'Error');
  });
});
