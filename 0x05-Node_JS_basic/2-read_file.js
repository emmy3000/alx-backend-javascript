/**
 * Read file contents from the given path, count
 * and display student information.
 *
 * @param {string} path - The path to the file to be read.
 * @returns {void}
 * @throws {Error} If the database cannot be loaded.
 */

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');

    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const students = lines.map((line) => line.split(','));

    const fields = {};
    let totalStudents = 0;

    students.forEach((student) => {
      const [firstName, , , field] = student;
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
      totalStudents += 1;
    });

    console.log(`Number of students: ${totalStudents}`);

    Object.keys(fields).forEach((field) => {
      const numStudentsInField = fields[field].length;
      const studentList = fields[field].join(', ');
      console.log(`Number of students in ${field}: ${numStudentsInField}. List: ${studentList}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
