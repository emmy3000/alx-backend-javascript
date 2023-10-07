/**
 * Implements a "Teacher" class with defined and dynamic attributes.
 */
class Teacher {
  protected firstName: string;
  protected lastName: string;
  private fullTimeEmployee: boolean = true;
  private yearsOfExperience?: number;
  protected location: string;
  [key: string]: any;

  /**
   * Creates an instance of Teacher.
   * @param {string} firstName - The first name of the teacher.
   * @param {string} lastName - The last name of the teacher.
   * @param {string} location - The location of the teacher.
   */
  constructor(firstName: string, lastName: string, location: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.location = location;
  }

  /**
   * Gets the full name of the teacher.
   * @returns {string} The full name.
   */
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const teacher3 = new Teacher('John', 'Doe', 'London');
teacher3.contract = false; // Adding an additional attribute

console.log(teacher3);

/**
 * Class for Directors extending Teacher class.
 */
class Directors extends Teacher {
  numberOfReports: number;

  constructor(
    firstName: string,
    lastName: string,
    location: string,
    numberOfReports: number
  ) {
    super(firstName, lastName, location);
    this.numberOfReports = numberOfReports;
  }

  getFullName(): string {
    return super.getFullName();
  }
}

const director1 = new Directors('John', 'Doe', 'London', 17);
console.log(director1.getFullName());

/**
 * Function to print the first letter of the firstName and the full lastName.
 * @param {string} firstName - The first name of the teacher.
 * @param {string} lastName - The last name of the teacher.
 * @returns {string} A string in the format "X. LastName".
 */
function printTeacher(firstName: string, lastName: string): string {
  const firstInitial = firstName.charAt(0).toUpperCase();
  const fullName = `${firstInitial}. ${lastName}`;
  return fullName;
}

/**
 * Interface for the printTeacher function.
 */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Example usage:
const teacherName: printTeacherFunction = printTeacher;
const result = teacherName('John', 'Doe');
console.log(result); // Output: "J. Doe"

/**
 * Interface for a Student.
 */
interface Student {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

/**
 * Class representing a Student.
 */
class StudentClass implements Student {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass('Alice', 'Johnson');
console.log(student.workOnHomework()); // Output: "Currently working"
console.log(student.displayName()); // Output: "Alice"
