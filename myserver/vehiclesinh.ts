import { vproperties, title } from "./myinterfaces";
import { Student } from "./student.interface";

class Vehicle {
  props: vproperties;
  constructor(wheels, engine, model, bhp) {
    this.props.wheels = wheels;
    this.props.engine = engine;
    this.props.model = model;
    this.props.bhp = bhp;
  }
  getProperties(): vproperties {
    return {
      wheels: this.props.wheels,
      engine: this.props.engine,
      model: this.props.model,
      bhp: this.props.bhp,
      autofeatures: { autopilot: false, autostop: false },
    };
  }
}

class Bike extends Vehicle {
  lastname: string;
  constructor(
    wheels,
    engine,
    model,
    bhp,
    private fname: string,
    lname: string
  ) {
    super(wheels, engine, model, bhp);
    this.lastname = lname;
  }
  getOwnerInfo(): Student {
    let xii = { maths: 34, computers: 34, electronics: 90 };
    return {
      firstname: this.fname,
      lastname: this.lastname,
      address: {
        dno: "121",
        street: "some street",
        city: "mumbai",
        country: "India",
      },
      xmarks: {
        maths: 34,
        science: 54,
        social: 45,
        english: 34,
        hindi: 99,
      },
      xiimarks: xii,
      language: { english: true, french: true, hindi: false, spanish: false },
    };
  }
}
let bike = new Bike(2, "twister", "honda", 500, "VESS", "Krishna");

console.log(bike.getProperties());
