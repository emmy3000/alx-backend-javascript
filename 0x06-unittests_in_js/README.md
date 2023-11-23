# 0x06. Unittests in JS

## Learning Objectives

In this section, you will learn the fundamentals of writing unit tests in JavaScript using Mocha, various assertion libraries, and handling different scenarios in your test suites.

1. **How to use Mocha to write a test suite**

`Mocha` is a flexible JavaScript test framework that allows you to structure and run your tests. To create a test suite with `Mocha`:

```javascript
describe('My Test Suite', () => {
  // Test cases go here
});
```

2. **How to use different assertion libraries (`Node` or `Chai`)**

Node Assertion Library

The Node.js built-in assert module provides a simple assertion testing mechanism:

```javascript
const assert = require('assert');

assert.strictEqual(actual, expected, 'Message if assertion fails');
```

Chai Assertion Library

`Chai` is a more expressive assertion library. Install `Chai` using:

```shell
npm install chai
```

Then, use it in your tests:

```javascript
const chai = require('chai');
const assert = chai.assert;

assert.strictEqual(actual, expected, 'Message if assertion fails');
```

3. **How to present long test suites**

When dealing with extensive test suites, consider organizing them into logical sections using nested `describe` blocks:

```javascript
describe('Feature A', () => {
  // Test cases for Feature A
});

describe('Feature B', () => {
  // Test cases for Feature B
});
```

4. **When and how to use spies**

`Sinon` is a library for creating spies, stubs, and mocks. To use spies:

```javascript
const sinon = require('sinon');

const spy = sinon.spy(object, 'method');

// Perform actions that should trigger the spy

sinon.assert.calledOnce(spy);
```

5. **When and how to use stubs**

Stubs in Sinon allow you to replace functions with predetermined behavior:

```javascript
const stub = sinon.stub(object, 'method');
stub.returns(desiredResult);

// Perform actions that should use the stub

sinon.assert.calledOnce(stub);
```

6. **What are hooks and when to use them**

Mocha supports hooks to run setup and teardown code before and after tests. Common hooks are:

- `before`: Run once before all tests.
- `after`: Run once after all tests.
- `beforeEach`: Run before each test.
- `afterEach`: Run after each test.

```javascript
before(() => {
  // Setup code
});

after(() => {
  // Teardown code
});

beforeEach(() => {
  // Code to run before each test
});

afterEach(() => {
  // Code to run after each test
});
```

7. **Unit testing with Async functions**

For testing asynchronous code, Mocha supports the `done` callback or returning a promise. For example:

```javascript
it('should handle async code', (done) => {
  // Async code here
  done();
});

// or

it('should handle async code', async () => {
  await someAsyncFunction();
});
```

8. **How to write integration tests with a small node server**

For integration tests involving a Node server, consider using a library like `Supertest`. Install it using:

```shell
npm install supertest --save-dev
```

Then, use it in your tests:

```javascript
const request = require('supertest');
const app = require('../your-node-server');

describe('Integration Tests', () => {
  it('should test some endpoint', async () => {
    const response = await request(app).get('/some-endpoint');
    assert.strictEqual(response.status, 200);
  });
});
```

## Author
Emeka Emodi
