/**
 * Create an Express application, listen on a specified port,
 * and respond with a plain text message.
 *
 * @module http_express
 * @returns {Object} Express application instance.
 */

const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
});

module.exports = app;
