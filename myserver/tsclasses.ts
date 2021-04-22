// typescript superscript of javascript
// typescript => javascript - transpilation of javascript
// npm install typescript - g(typescirpt compiler)

// program.ts
// complile - tsc program.ts(generate a program.js file)
// node program.js

// strong type - set datatype for variables

// age: number = 34;
// age = 'forty' // error
// name: string = 'tom'
// isHuman: boolean = true
// hobbies: string[] = ['swimming', 'cycling']
// address: string{ } = { street: '123 Main St', city: 'London' }
// food: any = string/number/array ...
class Vehicle {
  // data members or properties
  name: string = "";
  tyres: number = 0;
  model: string = "";

  constructor(newname = "", newcount = 0, newmodel = "") {
    this.name = newname;
    this.tyres = newcount;
    this.model = newmodel;
    this.getProperties();
  }
  // member functions
  setName(newname: string) {
    this.name = newname;
    this.getProperties();
  }
  setTyres(newcount: number) {
    this.tyres = newcount;
    this.getProperties();
  }
  setModel(newmodel: string) {
    this.model = newmodel;
    this.getProperties();
  }
  getProperties() {
    console.log(
      "name: " + this.name + " tyres: " + this.tyres + " model: " + this.model
    );
  }
}

let car = new Vehicle(); // instatiating the class - creating an object for the class
car.setModel("Benz");
car.setTyres(4);
car.setName("Mercedes");
car.setName("Prince");

let bike = new Vehicle("Twister", 2, "Honda"); //
