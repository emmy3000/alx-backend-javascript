var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Implements a "Teacher" class with defined and dynamic attributes.
 */
var Teacher = /** @class */ (function () {
    /**
     * Creates an instance of Teacher.
     * @param {string} firstName - The first name of the teacher.
     * @param {string} lastName - The last name of the teacher.
     * @param {string} location - The location of the teacher.
     */
    function Teacher(firstName, lastName, location) {
        this.fullTimeEmployee = true;
        this.firstName = firstName;
        this.lastName = lastName;
        this.location = location;
    }
    /**
     * Gets the full name of the teacher.
     * @returns {string} The full name.
     */
    Teacher.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Teacher;
}());
var teacher3 = new Teacher('John', 'Doe', 'London');
teacher3.contract = false; // Adding an additional attribute
console.log(teacher3);
/**
 * Class for Directors extending Teacher class.
 */
var Directors = /** @class */ (function (_super) {
    __extends(Directors, _super);
    function Directors(firstName, lastName, location, numberOfReports) {
        var _this = _super.call(this, firstName, lastName, location) || this;
        _this.numberOfReports = numberOfReports;
        return _this;
    }
    Directors.prototype.getFullName = function () {
        return _super.prototype.getFullName.call(this);
    };
    return Directors;
}(Teacher));
var director1 = new Directors('John', 'Doe', 'London', 17);
console.log(director1.getFullName());
/**
 * Function to print the first letter of the firstName and the full lastName.
 * @param {string} firstName - The first name of the teacher.
 * @param {string} lastName - The last name of the teacher.
 * @returns {string} A string in the format "X. LastName".
 */
function printTeacher(firstName, lastName) {
    var firstInitial = firstName.charAt(0).toUpperCase();
    var fullName = "".concat(firstInitial, ". ").concat(lastName);
    return fullName;
}
// Example usage:
var teacherName = printTeacher;
var result = teacherName('John', 'Doe');
console.log(result); // Output: "J. Doe"
/**
 * Class representing a Student.
 */
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student = new StudentClass('Alice', 'Johnson');
console.log(student.workOnHomework()); // Output: "Currently working"
console.log(student.displayName()); // Output: "Alice"
