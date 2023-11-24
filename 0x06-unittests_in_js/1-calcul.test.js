/*
  1-calcul.test.js

  This test suite covers the functionality of the calculateNumber function in 1-calcul.js.
  It includes test cases for various scenarios, ensuring correct behavior
  for 'SUM', 'SUBTRACT', and 'DIVIDE' types.
*/

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  function testOperation(description, type, a, b, expected) {
    it(description, () => {
      expect.hasAssertions();
      assert.strictEqual(calculateNumber(type, a, b), expected);
    });
  }

  describe('type == "SUM"', () => {
    testOperation('should add two rounded numbers with equal positive numbers', 'SUM', 2.0, 2.0, 4);
    testOperation('should add two rounded numbers with equal positive numbers (alternate)', 'SUM', 2.3, 1.8, 4);
  });

  describe('type == "SUBTRACT"', () => {
    testOperation('should subtract b from a with equal positive numbers', 'SUBTRACT', 2.0, 2.0, 0);
    testOperation('should subtract b from a with equal positive numbers (alternate)', 'SUBTRACT', 2.3, 1.8, 0);
  });

  describe('type == "DIVIDE"', () => {
    testOperation('should divide a by b with positive numbers', 'DIVIDE', 8.0, 2.0, 4.0);
    testOperation('should divide a by b with numbers of different signs', 'DIVIDE', -7.0, 2.0, -3.5);
  });
});
