/**
 * Class representing a Director.
 */
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getToWork = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
/**
 * Class representing a Teacher.
 */
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
/**
 * Function to create an employee (either Director or Teacher).
 * @param {number | string} salary - The salary of the employee.
 * @returns {Director | Teacher} An instance of either Director or Teacher.
 */
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
// Testing createEmployee function
console.log(createEmployee(200).constructor.name);
console.log(createEmployee(1000).constructor.name);
console.log(createEmployee('$500').constructor.name);
/**
 * Type guard function to check if the employee is a Director.
 * @param employee - The employee to check.
 * @returns True if the employee is a Director, false otherwise.
 */
function isDirector(employee) {
    return 'workDirectorTasks' in employee;
}
/**
 * Execute work based on the employee type.
 * @param employee - The employee to execute work for.
 */
function executeWork(employee) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    }
    else {
        console.log(employee.workTeacherTasks());
    }
}
// Example usage:
var teacherEmployee = createEmployee(200);
var directorEmployee = createEmployee(1000);
executeWork(teacherEmployee);
executeWork(directorEmployee);
