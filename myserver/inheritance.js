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
var Person = /** @class */ (function () {
    function Person(fname, lname) {
        this.legs = 2;
        this.hands = 2;
        this.firstName = "";
        this.lastName = "";
        this.firstName = fname;
        this.lastName = lname;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
// person = new Person(fname, lname);
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(fname, lname) {
        return _super.call(this, fname, lname) || this;
    }
    Employee.prototype.getFullName = function () {
        var detail = _super.prototype.getFullName.call(this) +
            " is having " +
            this.legs +
            " and " +
            this.hands +
            " hands";
        return detail;
    };
    return Employee;
}(Person));
var emp = new Employee("John", "Doe");
var fullname = emp.getFullName();
console.log(fullname);
