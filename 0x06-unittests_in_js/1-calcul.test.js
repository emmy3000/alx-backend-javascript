/*
  1-calcul.test.js

  This test suite covers the functionality of the calculateNumber function in 1-calcul.js.
  It includes test cases for various scenarios, ensuring correct behavior
  for 'SUM', 'SUBTRACT', and 'DIVIDE' types.
*/

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  // Helper function for test cases
  function testOperation(description, type, a, b, expected) {
    it(description, () => {
      assert.strictEqual(calculateNumber(type, a, b), expected);
    });
  }

  // Test cases for SUM operation
  describe('type == "SUM"', () => {
    testOperation('should add two rounded numbers with equal positive numbers', 'SUM', 2.0, 2.0, 4);
    testOperation('should add two rounded numbers with equal positive numbers (alternate)', 'SUM', 2.3, 1.8, 4);
    testOperation('should add two rounded numbers with equal negative numbers', 'SUM', -2.0, -2.0, -4);
    testOperation('should add two rounded numbers with equal negative numbers (alternate)', 'SUM', -2.3, -1.8, -4);
    testOperation('should add two rounded numbers with negative and positive numbers', 'SUM', -2.0, 2.0, 0);
    testOperation('should add two rounded numbers with positive and negative numbers', 'SUM', 2.0, -2.0, 0);
    testOperation('should add two rounded numbers with 0 and 0', 'SUM', 0.0, 0.0, 0);
  });

  // Test cases for SUBTRACT operation
  describe('type == "SUBTRACT"', () => {
    testOperation('should subtract b from a with equal positive numbers', 'SUBTRACT', 2.0, 2.0, 0);
    testOperation('should subtract b from a with equal positive numbers (alternate)', 'SUBTRACT', 2.3, 1.8, 0);
    testOperation('should subtract b from a with equal negative numbers', 'SUBTRACT', -2.0, -2.0, 0);
    testOperation('should subtract b from a with equal negative numbers (alternate)', 'SUBTRACT', -2.3, -1.8, 0);
    testOperation('should subtract b from a with negative and positive numbers', 'SUBTRACT', -2.0, 2.0, -4.0);
    testOperation('should subtract b from a with positive and negative numbers', 'SUBTRACT', 2.0, -2.0, 4.0);
    testOperation('should subtract b from a with 0 and 0', 'SUBTRACT', 0.0, 0.0, 0);
  });

  // Test cases for DIVIDE operation
  describe('type == "DIVIDE"', () => {
    testOperation('should divide a by b with positive numbers', 'DIVIDE', 8.0, 2.0, 4.0);
    testOperation('should divide a by b with numbers of different signs', 'DIVIDE', -7.0, 2.0, -3.5);
    testOperation('should divide a by b with numbers of different signs (alternate)', 'DIVIDE', 7.0, -2.0, -3.5);
    testOperation('should divide a by b with negative numbers', 'DIVIDE', -7.0, -2.0, 3.5);
    testOperation('should divide a by b with equal positive numbers', 'DIVIDE', 2.0, 2.0, 1);
    testOperation('should handle division by zero and return Error', 'DIVIDE', 1.4, 0, 'Error');
    testOperation('should handle division by zero with 0 and positive number and return Error', 'DIVIDE', 0.0, 5.0, 'Error');
    testOperation('should handle division by zero with 0 and negative number and return Error', 'DIVIDE', 0.0, -5.0, 'Error');
    testOperation('should handle division by zero with positive number and 0 and return Error', 'DIVIDE', 5.0, 0, 'Error');
    testOperation('should handle division by zero with positive number and number rounded down to 0 and return Error', 'DIVIDE', 5.0, 0.2, 'Error');
    testOperation('should handle division by zero with positive number and number rounded up to 0 and return Error', 'DIVIDE', 5.0, -0.2, 'Error');
    testOperation('should handle division by zero with negative number and 0 and return Error', 'DIVIDE', -5.0, 0, 'Error');
    testOperation('should handle division by zero with negative number and number rounded down to zero and return Error', 'DIVIDE', -5.0, 0.2, 'Error');
    testOperation('should handle division by zero with negative number and number rounded up to zero and return Error', 'DIVIDE', -5.0, -0.2, 'Error');
    testOperation('should handle division by zero with 0 and 0 and return Error', 'DIVIDE', 0.0, 0.0, 'Error');
  });

});
