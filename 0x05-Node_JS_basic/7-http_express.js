/**
 * Create an Express application, listen on a specified port,
 * and handle requests for student information.
 *
 * @module http_express
 * @returns {Object} Express application instance.
 */

const express = require('express');
const { readFile } = require('fs').promises;

const app = express();
const port = 1245;

function countStudents(path) {
  return readFile(path, 'utf-8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      const students = {};
      const fields = {};
      let totalStudents = 0;

      lines.forEach((line, index) => {
        // Skip header line
        if (index !== 0) {
          const [firstName, , , field] = line.split(',');
          if (!fields[field]) {
            fields[field] = 1;
          } else {
            fields[field] += 1;
          }
          if (!students[field]) {
            students[field] = [firstName];
          } else {
            students[field].push(firstName);
          }
          totalStudents += 1;
        }
      });

      let output = `Number of students: ${totalStudents}\n`;

      Object.keys(fields).forEach((field) => {
        const numStudentsInField = fields[field];
        const studentList = students[field].join(', ');
        output += `Number of students in ${field}: ${numStudentsInField}. List: ${studentList}\n`;
      });

      return output.trim();
    })
    .catch((error) => {
      console.error('Cannot load the database:', error.message);
      throw error;
    });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const fileName = process.argv[2];
    if (!fileName) {
      res.status(404).send('Database file not provided');
      return;
    }

    const output = await countStudents(fileName);
    res.send(`This is the list of our students\n${output}`);
  } catch (error) {
    res.status(404).send('Cannot load the database');
  }
});

app.listen(port, () => {
});

module.exports = app;
