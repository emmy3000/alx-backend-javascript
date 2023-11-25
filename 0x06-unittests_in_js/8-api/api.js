/*
  8-api/api.js

  This file defines an Express application for a payment system.
  It creates an Express instance, listens on port 7865, and sets up a simple route for the index page.

  The index page route ("/") returns the message "Welcome to the payment system".
*/

const express = require('express');

const app = express();
const port = 7865;

app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
})

module.exports = app;
