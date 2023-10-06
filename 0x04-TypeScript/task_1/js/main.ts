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
