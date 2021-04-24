"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(empid, empname, basic, travel, medical) {
        this.empId = empid;
        this.empName = empname;
        this.basic = basic;
        this.travel = travel;
        this.medical = medical;
        // this is the first method automatically called when the class is instantiated
        console.log("constructor called..");
    }
    Employee.prototype.getSalary = function () {
        return this.basic + this.travel + this.medical;
    };
    return Employee;
}());
var emp1 = new Employee("a123", "Tom", 1000, 200, 300); // class instantiation
var sal1 = emp1.getSalary();
// emp.constructor();
console.log("Salary of " + emp1.empName + " whose employee id is " + emp1.empId + " is " + emp1.getSalary());
