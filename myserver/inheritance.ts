class Person {
  legs: number = 2;
  hands: number = 2;
  firstName: string = "";
  lastName: string = "";
  constructor(fname: string, lname: string) {
    this.firstName = fname;
    this.lastName = lname;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

// person = new Person(fname, lname);
class Employee extends Person {
  fname: string;
  lname: string;
  constructor(fname: string, lname: string) {
    super(fname, lname);
  }
  getFullName(): string {
    let detail =
      super.getFullName() +
      " is having " +
      this.legs +
      " legs and " +
      this.hands +
      " hands";
    return detail;
  }
}

let emp = new Employee("John", "Doe");
let fullname = emp.getFullName();
console.log(fullname);
