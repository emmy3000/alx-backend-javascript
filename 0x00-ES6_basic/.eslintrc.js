module.exports = {
  root: true,
  env: {
    browser: false,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base', 'plugin:jest/recommended', 'eslint:recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    env: {
      node: true,
    },
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    'import/extensions': ['error', 'always', { js: 'always' }],
    'babel/no-unused-expressions': 'error',
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      parserOptions: {
        ecmaVersion: 11, // Enable ECMAScript 2020 features (including ??)
      },
      excludedFiles: 'babel.config.js',
    },
  ],
};
