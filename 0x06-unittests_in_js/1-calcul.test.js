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
      const result = calculateNumber(type, a, b);
      assert.strictEqual(result, expected);
    });
  }

  describe('type == "SUM"', () => {
    testOperation('should add two rounded numbers with equal positive numbers', 'SUM', 2.0, 2.0, 4);
  });

  describe('type == "SUBTRACT"', () => {
    testOperation('should subtract b from a with equal positive numbers', 'SUBTRACT', 2.0, 2.0, 0);
  });

  describe('type == "DIVIDE"', () => {
    testOperation('should divide a by b with positive numbers', 'DIVIDE', 8.0, 2.0, 4.0);
  });
});
