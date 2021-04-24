import { Ishape } from "./shape.interface";

class Shape {
  type: string;
  length: number;
  breadth: number;
  constructor(type, length, breadth?: number) {
    this.type = type;
    this.length = length;
    this.breadth = breadth;
  }
  area() {
    if (this.type == "rectangle") {
      return this.length * this.breadth;
    } else if ((this.type = "square")) {
      return this.length * this.length;
    } else if (this.type == "circle") {
      let pi = Math.PI;
      return pi * (this.length * this.length);
    } else {
      return null;
    }
  }
  perimeter() {
    if (this.type == "rectangle") {
      return 2 * (this.length + this.breadth);
    } else if ((this.type = "square")) {
      return 4 * this.length;
    } else if (this.type == "circle") {
      let pi = Math.PI;
      return 2 * (pi * this.length);
    } else {
      return null;
    }
  }
}

let rect = new Shape("rectangle", 5, 8);
let rarea = rect.area();
console.log("Rectange area is ", rarea);
let rperi = rect.perimeter();
console.log("Rectange perimeter is ", rperi);

let sqr = new Shape("square", 9);
let sarea = sqr.area();
console.log("Square area is ", sarea);
let speri = sqr.perimeter();
console.log("Square perimeter is ", speri);

let cir = new Shape("circle", 6);
let carea = cir.area();
console.log("Circle area is ", carea);
let cperi = cir.perimeter();
console.log("Circle perimeter is ", cperi);

// console.log(Math.PI);
