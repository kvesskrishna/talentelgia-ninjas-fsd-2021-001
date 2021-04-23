class Calculator {
  a: number = 0;
  b: number = 0;
  result: number = 0;

  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }
  add = (): number => {
    this.result = this.a + this.b;
    return this.result;
  };

  sub = (): number => {
    this.result = this.a - this.b;
    return this.result;
  };
  mul = (): number => {
    this.result = this.a * this.b;
    return this.result;
  };
}

let calc = new Calculator(4, 6);
calc.a = 3; //overwrite a
calc.b = 4; //overwrite b
console.log(calc.add());
