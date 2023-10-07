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

  // Custom method to print properties
  printProperties(): void {
    for (const prop in this) {
      if (this.hasOwnProperty(prop)) {
        console.log(`${prop}: ${this[prop]}`);
      }
    }
  }
}

const director1 = new Directors('John', 'Doe', 'London', 17);
director1.printProperties();

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
