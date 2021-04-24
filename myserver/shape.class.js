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
        else if ((this.type = "square")) {
            return this.length * this.length;
        }
        else if (this.type == "circle") {
            var pi = Math.PI;
            return pi * (this.length * this.length);
        }
        else {
            return null;
        }
    };
    Shape.prototype.perimeter = function () {
        if (this.type == "rectangle") {
            return 2 * (this.length + this.breadth);
        }
        else if ((this.type = "square")) {
            return 4 * this.length;
        }
        else if (this.type == "circle") {
            var pi = Math.PI;
            return 2 * (pi * this.length);
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
