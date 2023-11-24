/*
  calculateNumber.js

  This module defines the 'calculateNumber' function, which takes two numerical arguments,
  rounds them, and returns the sum of their rounded values.
*/
function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
