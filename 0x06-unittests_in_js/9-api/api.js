/* API Server
   This script initializes an Express server with two endpoints:
   1. '/' - Returns a welcome message for the payment system.
   2. '/cart/:id' - Returns payment methods for the specified cart ID.

   The server runs on port 7865.
*/

const express = require('express');

const app = express();
const port = 7865;

// Endpoint for the root path
app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

// Endpoint for '/cart/:id', where :id must be a number
app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id;

  // Sending payment methods for the specified cart ID
  res.send(`Payment methods for cart ${cartId}`);
});

// Start the server
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

// Export the app for testing purposes
module.exports = app;
