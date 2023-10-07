/**
 * Interface for DirectorInterface
 */
interface DirectorInterface {
  workFromHome(): string;
  getToWork(): string;
  workDirectorTasks(): string;
}

/**
 * Class representing a Director.
 */
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getToWork(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

/**
 * Interface for TeacherInterface
 */
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

/**
 * Class representing a Teacher.
 */
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

/**
 * Function to create an employee (either Director or Teacher).
 * @param {number | string} salary - The salary of the employee.
 * @returns {Director | Teacher} An instance of either Director or Teacher.
 */
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Testing createEmployee function
console.log(createEmployee(200).constructor.name);
console.log(createEmployee(1000).constructor.name);
console.log(createEmployee('$500').constructor.name);
