/*
  1-calcul.js

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
  // Helper function to round a number to two decimal places
  const round = (num) => Math.round(num * 100) / 100;

  // Ensure a and b are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both a and b must be numbers');
  }

  // Perform the operation based on the provided type
  switch (type) {
    case 'SUM':
      return round(a + b);
    case 'SUBTRACT':
      return round(a - b);
    case 'DIVIDE':
      if (round(b) === 0) {
        return 'Error';
      }
      return round(a / b);
    default:
      throw new Error('Invalid operation type. Supported types are: SUM, SUBTRACT, DIVIDE');
  }
}

module.exports = calculateNumber;
