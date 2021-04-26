"use strict";
exports.__esModule = true;
var Shape = /** @class */ (function () {
    function Shape(type, length, breadth) {
        this.type = type;
        this.length = length;
        this.breadth = breadth;
    }
    Shape.prototype.area = function () {
        if (this.type == "rectangle") {
            return this.length * this.breadth;
        }
        else if (this.type == "square") {
            return this.length * this.length;
        }
        else if (this.type == "circle") {
            console.log("in circle");
            return (Math.PI * this.length * this.length).toFixed(2);
        }
        else {
            return null;
        }
    };
    Shape.prototype.perimeter = function () {
        if (this.type == "rectangle") {
            return 2 * (this.length + this.breadth);
        }
        else if (this.type == "square") {
            return 4 * this.length;
        }
        else if (this.type == "circle") {
            return (2 * Math.PI * this.length).toFixed(2);
        }
        else {
            return null;
        }
    };
    return Shape;
}());
var rect = new Shape("rectangle", 5, 8);
var rarea = rect.area();
console.log("Rectange area is ", rarea);
var rperi = rect.perimeter();
console.log("Rectange perimeter is ", rperi);
var sqr = new Shape("square", 9);
var sarea = sqr.area();
console.log("Square area is ", sarea);
var speri = sqr.perimeter();
console.log("Square perimeter is ", speri);
var cir = new Shape("circle", 6);
var carea = cir.area();
console.log("Circle area is ", carea);
var cperi = cir.perimeter();
console.log("Circle perimeter is ", cperi);
// console.log(Math.PI);
