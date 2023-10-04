/**
 * jest.config.js
 * Configures Jest for running JavaScript tests and specifies test file patterns.
 */
const path = require('path');

module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.js$',
  moduleFileExtensions: ['js', 'json', 'node'],
};
