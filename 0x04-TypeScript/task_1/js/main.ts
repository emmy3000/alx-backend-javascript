/**
 * Implements a "Teacher" class with defined and dynamic attributes.
 */
class Teacher {
  private firstName: string;
  private lastName: string;
  private fullTimeEmployee: boolean = true;
  private yearsOfExperience?: number;
  private location: string;
  [key: string]: any;

  constructor(firstName: string, lastName: string, location: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.location = location;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const teacher3 = new Teacher('John', 'Doe', 'London');
teacher3.contract = false; // Adding an additional attribute

console.log(teacher3);

/**
 * Interface for Directors extending Teacher class.
 */
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
