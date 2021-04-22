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
var Vehicle = /** @class */ (function () {
    function Vehicle(newname, newcount, newmodel) {
        if (newname === void 0) { newname = ""; }
        if (newcount === void 0) { newcount = 0; }
        if (newmodel === void 0) { newmodel = ""; }
        // data members or properties
        this.name = "";
        this.tyres = 0;
        this.model = "";
        this.name = newname;
        this.tyres = newcount;
        this.model = newmodel;
        this.getProperties();
    }
    // member functions
    Vehicle.prototype.setName = function (newname) {
        this.name = newname;
        this.getProperties();
    };
    Vehicle.prototype.setTyres = function (newcount) {
        this.tyres = newcount;
        this.getProperties();
    };
    Vehicle.prototype.setModel = function (newmodel) {
        this.model = newmodel;
        this.getProperties();
    };
    Vehicle.prototype.getProperties = function () {
        console.log("name: " + this.name + " tyres: " + this.tyres + " model: " + this.model);
    };
    return Vehicle;
}());
var car = new Vehicle(); // instatiating the class - creating an object for the class
car.setModel("Benz");
car.setTyres(4);
car.setName("Mercedes");
car.setName("Prince");
var bike = new Vehicle("Twister", 2, "Honda"); //
