/**
 * eslintrc.js
 * ESLint Configurations Set-up
 */
module.exports = {
  root: true,
  env: {
    browser: false,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ["airbnb-base", "plugin:jest/recommended", "eslint:recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    env: {
      node: true,
    },
  },
  plugins: ["jest"],
  rules: {
    "no-console": "off",
    "no-shadow": "off",
    "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
    "import/extensions": ["error", "always", { js: "always" }],
    "babel/no-unused-expressions": "warn",
  },
  overrides: [
    {
      files: ["*.js"],
      excludedFiles: ["**/*-main.js", "babel.config.js"],
      rules: {
        quotes: ["error", "single"],
      },
    },
    {
      files: ["babel.config.js"],
      rules: {
        quotes: ["error", "single"],
      },
    },
  ],
};
