# 0x05. NodeJS Basics

## Introduction

Welcome to the NodeJS Basics module! This comprehensive guide is tailored to equip you with the essential knowledge and practical skills needed to develop robust and efficient JavaScript applications using NodeJS.

## Learning Objectives

1. **Running JavaScript using NodeJS:** Begin your journey by mastering the execution of JavaScript code outside of the browser environment.
2. **Using NodeJS Modules:** Unlock the potential of modular development in NodeJS as you delve into working with both built-in and external modules.
3. **Reading Files with Specific NodeJS Modules:** Gain proficiency in file manipulation by utilizing specific NodeJS modules to read and interact with file systems.
4. **Accessing Command Line Arguments and Environment Variables:** Learn how to interact with command line arguments and environment variables using the process module.
5. **Creating HTTP Servers with NodeJS and Express JS:** Explore server-side development by building basic HTTP servers with NodeJS and advancing to feature-rich servers using the Express JS framework.
6. **Creating Advanced Routes with Express JS:** Enhance your Express JS skills by creating advanced routes, laying the foundation for dynamic and scalable web applications.
7. **Using ES6 with NodeJS via Babel-node:** Embrace modern JavaScript development by incorporating ES6 features into your NodeJS applications with the help of Babel-node.
8. **Developing Faster with Nodemon:** Streamline your development workflow using Nodemon, a tool that automates the restart of NodeJS applications upon file changes.

## Provided Base Files

### `database.csv`

`database.csv` is a comma-separated values (CSV) file serving as a tabular data storage format. It contains information about individuals, including first name, last name, age, and field of expertise. Easily importable and manipulable by various tools and programming languages, it offers a convenient format for storing and exchanging data.

```shell
firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS
```

### `package.json`

`package.json` is a configuration file for a Node.js project, providing essential metadata and configuration details.

```json
{
  "name": "node_js_basics",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "test": "./node_modules/mocha/bin/mocha --require babel-register --exit",
    "dev": "nodemon --exec babel-node --presets babel-preset-env ./server.js ./database.csv"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "chai-http": "^4.3.0",
    "express": "^4.17.1"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "nodemon": "^2.0.2",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "chai": "^4.2.0",
    "mocha": "^6.2.2",
    "request": "^2.88.0",
    "sinon": "^7.5.0"
  }
}
```

### `babel.config.js`

`babel.config.js` is a configuration file for Babel, a JavaScript compiler enabling the use of the latest ECMAScript features in environments that may not fully support them.

```javascript
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

### `.eslintrc.js`

`.eslintrc.js` is a configuration file for ESLint, a widely used linter tool for JavaScript, defining rules and settings to enforce coding standards and improve code quality during development.

```javascript
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```

Install project dependencies from `package.json` into the project's code base:

```bash
$ npm install
```

## Author
Emeka Emodi
