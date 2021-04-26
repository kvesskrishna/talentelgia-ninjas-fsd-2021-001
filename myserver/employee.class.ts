import { IEmployee } from "./employee.interface";

class Employee implements IEmployee {
  empId: string;
  empName: string;
  basic: number;
  travel: number;
  medical: number;
  location: string;
  constructor(empid, empname, basic, travel, medical, location) {
    this.empId = empid;
    this.empName = empname;
    this.basic = basic;
    this.travel = travel;
    this.medical = medical;
    this.location = location;
    // this is the first method automatically called when the class is instantiated
    console.log("constructor called..");
    // return { empid: this.empid, empName: this.empName, basic: this.basic, travel: this.travel, medical: this.medical, location: this.location };
  }
  getSalary() {
    return this.basic + this.travel + this.medical;
  }
}

let emp1 = new Employee("a123", "Tom", 1000, 200, 300, "Gurgaon"); // class instantiation
console.log(emp1);
let sal1 = emp1.getSalary();
// emp.constructor();
console.log(
  `Salary of ${emp1.empName} whose employee id is ${
    emp1.empId
  } is ${emp1.getSalary()}`
);

let employees = [
  new Employee("a123", "Tom", 5000, 200, 300, "Gurgaon"),
  new Employee("a124", "miKE", 3000, 200, 500, "Delhi"),
  new Employee("a125", "Jack", 322, 3232, 432, "Gurgaon"),
  new Employee("a126", "John", 434, 33, 323, "Chandigarh"),
];

console.log(employees);

employees.forEach((employee) => {
  console.log(`${employee.empName} is from ${employee.location}`);
});

let filtered = employees.filter((emp) => emp.location != "Delhi");
console.log("Filetered Result: ", filtered);
