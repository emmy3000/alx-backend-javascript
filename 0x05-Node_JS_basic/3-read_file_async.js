// 3-read_file_async.js

const { readFile } = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter(line => line.trim() !== '');

        const students = {};
        const fields = {};
        let totalStudents = 0;

        lines.forEach((line, index) => {
          // Skip header line
          if (index !== 0) {
            const [firstName, lastName, age, field] = line.split(',');
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

        Object.keys(fields).forEach(field => {
          const numStudentsInField = fields[field];
          const studentList = students[field].join(', ');
          console.log(`Number of students in ${field}: ${numStudentsInField}. List: ${studentList}`);
        });

        resolve();
      }
    });
  });
}

module.exports = countStudents;
