/**
 * Implements a "Teacher" class with defined and dynamic attributes.
 */
var Teacher = /** @class */ (function () {
    function Teacher(firstName, lastName, location) {
        this.fullTimeEmployee = true;
        this.firstName = firstName;
        this.lastName = lastName;
        this.location = location;
    }
    Teacher.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Teacher;
}());
var teacher3 = new Teacher('John', 'Doe', 'London');
teacher3.contract = false; // Adding an additional attribute
console.log(teacher3);
