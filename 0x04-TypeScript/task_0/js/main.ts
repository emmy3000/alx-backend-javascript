/**
 * This script creates a table of students and displays their first names and locations.
 */
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentsList: Student[] = [
  {
    firstName: "Guillaume",
    lastName: "Lastname1",
    age: 25,
    location: "San Francisco",
  },
  {
    firstName: "James",
    lastName: "Lastname2",
    age: 22,
    location: "Columbia",
  },
];

function renderTable(students: Student[]) {
  const table = document.createElement("table");
  const headerRow = table.insertRow(0);
  const header1 = headerRow.insertCell(0);
  const header2 = headerRow.insertCell(1);

  header1.textContent = "First Name";
  header2.textContent = "Location";

  students.forEach((student, index) => {
    const row = table.insertRow(index + 1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });

  document.body.appendChild(table);
}

renderTable(studentsList);
