/**
 * Create an HTTP server, listen on a specified host and port,
 * and respond with a plain text message.
 *
 * @module http
 * @returns {Object} HTTP server instance.
 */

const http = require('http');

const host = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

app.listen(port, host, () => {
});

module.exports = app;
