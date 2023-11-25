/* API Server
   This script initializes an Express server with several endpoints:
   1. '/' - Returns a welcome message for the payment system.
   2. '/cart/:id' - Returns payment methods for the specified cart ID.
   3. '/available_payments' - Returns an object indicating available payment methods.
   4. '/login' - Returns a welcome message with the username from the request body.

   The server runs on port 7865.
*/

// Importing necessary modules
const express = require('express');
const bodyParser = require('body-parser');

// Creating an Express application
const app = express();
const port = 7865;

// Adding middleware to parse JSON data in the request body
app.use(bodyParser.json());

// Endpoint for the root path
app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

// Endpoint for '/cart/:id', where :id must be a number
app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

// Endpoint for '/available_payments'
app.get('/available_payments', (_, res) => {
  const paymentMethods = {
    credit_cards: true,
    paypal: false,
  };
  res.json({ payment_methods: paymentMethods });
});

// Endpoint for '/login', expecting a JSON body with a 'userName' field
app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

// Starting the server
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

// Exporting the app for testing purposes
module.exports = app;
