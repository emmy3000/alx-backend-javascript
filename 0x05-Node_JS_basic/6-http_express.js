// 6-http_express.js

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port=1245, () => {});

module.exports = app;
