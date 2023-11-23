/**
 * Retrieves student data from a database file.
 *
 * @param {string} databaseFilePath - The path to the CSV data file.
 * @returns {Promise<Object<string, Object<string, string|number>[]>>} A promise
 *   that resolves to an object representing the database entries grouped by
 *   data fields.
 */

import readDatabase from '../utils';

// Major fields recorded in the students database
const majorFields = ['CS', 'SWE'];

class StudentsController {
  static getAllStudents(request, response) {
    const databaseFilePath = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(databaseFilePath).then((groupedByField) => {
      const responseSections = ['This is the list of our students'];
      // Ordered list of strings ascending alphabetically & function comparisons
      // Also case insensitive
      const compareStrings = (str1, str2) => {
        const lowerStr1 = str1.toLowerCase();
        const lowerStr2 = str2.toLowerCase();

        if (lowerStr1 < lowerStr2) {
          return -1;
        }
        if (lowerStr1 > lowerStr2) {
          return 1;
        }
        return 0;
      };

      // Iterates over each field and associated group of students
      for (const [fieldName, group] of Object.entries(groupedByField).sort(compareStrings)) {
        responseSections.push([
          `Number of students in ${fieldName}: ${group.length}.`,
          'List:',
          group.map((student) => student.firstname).join(', '),
        ].join(' '));
      }
      response.status(200).send(responseSections.join('\n'));
    })
      .catch((error) => {
        response.status(500)
          .send(error instanceof Error ? error.message : error.toString());
      });
  }

  // Retrieves all students belonging to a specific major
  static getAllStudentsByMajor(request, response) {
    const databaseFilePath = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;

    // Validates the major parameter and handles invalid values
    if (!majorFields.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(databaseFilePath)
      .then((groupedByField) => {
        let studentList = '';

        // Checks if the major exists in the groupedByField object
        // and constructs the student list
        if (Object.keys(groupedByField).includes(major)) {
          const group = groupedByField[major];
          studentList = `List: ${group.map((student) => student.firstname).join(', ')}`;
        }
        response.status(200).send(studentList);
      })
      .catch((error) => {
        response.status(500)
          .send(error instanceof Error ? error.message : error.toString());
      });
  }
}

export default StudentsController;
