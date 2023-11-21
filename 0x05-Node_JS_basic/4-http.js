// 4-http.js

const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

app.listen(port=1245, host='127.0.0.1', () => {});

module.exports = app;
