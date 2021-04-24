import { IEmployee } from "./employee.interface";

class Employee implements IEmployee {
  empId: string;
  empName: string;
  basic: number;
  travel: number;
  medical: number;
  constructor(empid, empname, basic, travel, medical) {
    this.empId = empid;
    this.empName = empname;
    this.basic = basic;
    this.travel = travel;
    this.medical = medical;
    // this is the first method automatically called when the class is instantiated
    console.log("constructor called..");
  }
  getSalary() {
    return this.basic + this.travel + this.medical;
  }
}

let emp1 = new Employee("a123", "Tom", 1000, 200, 300); // class instantiation
let sal1 = emp1.getSalary();
// emp.constructor();
console.log(
  `Salary of ${emp1.empName} whose employee id is ${
    emp1.empId
  } is ${emp1.getSalary()}`
);
