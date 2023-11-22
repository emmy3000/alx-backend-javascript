/**
 * Read file contents asynchronously from the given path,
 * count and display student information.
 *
 * @param {string} path - The path to the file to be read.
 * @returns {Promise<void>} A promise that resolves once
 *  the student information is displayed.
 */

const { readFile } = require('fs').promises;

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

      console.log(`Number of students: ${totalStudents}`);

      Object.keys(fields).forEach((field) => {
        const numStudentsInField = fields[field];
        const studentList = students[field].join(', ');
        console.log(`Number of students in ${field}: ${numStudentsInField}. List: ${studentList}`);
      });
    })
    .catch((error) => {
      console.error('Cannot load the database:', error.message);
    });
}

module.exports = countStudents;
