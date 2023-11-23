/**
 * Reads a database from a CSV data file.
 *
 * @param {string} databaseFilePath - The path to the CSV data file.
 * @returns {Promise<Object<string, Object<string, string|number>[]>>} A promise
 *   that resolves to an object where each dataField has an array of objects
 *   representing database entries.
 */

import fs from 'fs';

// Check if the database file path is provided
const readDatabase = (databaseFilePath) => new Promise((resolve, reject) => {
  if (!databaseFilePath) {
    reject(new Error('Cannot load the database'));
  }
  if (databaseFilePath) {
    fs.readFile(databaseFilePath, (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        // Convert file data to rows
        const fileRows = data.toString('utf-8').trim().split('\n');
        const groupedByField = {};
        const csvHeaders = fileRows[0].split(',');
        const propertyNames = csvHeaders.slice(0, csvHeaders.length - 1);

        // Process each row in the file
        for (const row of fileRows.slice(1)) {
          const studentData = row.split(',');
          const propertyValues = studentData.slice(0, studentData.length - 1);
          const dataField = studentData[studentData.length - 1];

          // Check if dataField key exists in groupedByField object
          if (!Object.keys(groupedByField).includes(dataField)) {
            groupedByField[dataField] = [];
          }

          // Create entry properties and add to groupedByField
          const entryProperties = propertyNames.map((name, index) => [name, propertyValues[index]]);
          groupedByField[dataField].push(Object.fromEntries(entryProperties));
        }
        resolve(groupedByField);
      }
    });
  }
});

export default readDatabase;
