/*
  2-calcul_chai.js

  This module defines the 'calculateNumber' function, which takes three arguments:
  - type: A string specifying the operation type ('SUM', 'SUBTRACT', or 'DIVIDE').
  - a: The first number for the calculation.
  - b: The second number for the calculation.

  The function performs different operations based on the provided type:
  - SUM: Adds the rounded values of a and b.
  - SUBTRACT: Subtracts the rounded value of b from the rounded value of a.
  - DIVIDE: Divides the rounded value of a by the rounded value of b.
            Returns 'Error' if b is rounded to 0.
*/

function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  switch (type) {
    case 'SUM':
      return roundedA + roundedB;
    case 'SUBTRACT':
      return roundedA - roundedB;
    case 'DIVIDE':
      if (roundedB === 0) {
        return 'Error';
      }
      return roundedA / roundedB;
    default:
      throw new Error('Invalid type. Supported types are SUM, SUBTRACT, and DIVIDE.');
  }
}

module.exports = calculateNumber;
