import { IEmployee } from "./employee.interface";

class Employee implements IEmployee {
  empId: string;
  empName: string;
  getSalary(): number {
    let sal = 6000;
    return sal;
  }
  getDetails(): string {
    return "Name" + this.empName;
  }
}
