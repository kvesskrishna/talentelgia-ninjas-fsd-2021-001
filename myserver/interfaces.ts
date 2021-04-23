interface Car {
  name: string;
  model: string;
  color: string;
  move: () => string;
}

let mycar: Car = {
  model: "asdf",
  name: "asdfads",
  color: "sds",
  move: () => {
    return "0";
  },
};
