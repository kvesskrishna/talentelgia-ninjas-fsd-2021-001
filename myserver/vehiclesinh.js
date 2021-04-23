"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Vehicle = /** @class */ (function () {
    function Vehicle(wheels, engine, model, bhp) {
        this.props.wheels = wheels;
        this.props.engine = engine;
        this.props.model = model;
        this.props.bhp = bhp;
    }
    Vehicle.prototype.getProperties = function () {
        return {
            wheels: this.props.wheels,
            engine: this.props.engine,
            model: this.props.model,
            bhp: this.props.bhp,
            autofeatures: { autopilot: false, autostop: false }
        };
    };
    return Vehicle;
}());
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(wheels, engine, model, bhp) {
        return _super.call(this, wheels, engine, model, bhp) || this;
    }
    return Bike;
}(Vehicle));
var bike = new Bike(2, "twister", "honda", 500);
console.log(bike.getProperties());
