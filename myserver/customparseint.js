const convert = (x) => {
    x = +x;
    return x + 0 == x ? x : 'Please input the string containing only numbers'
}
let value = '123'
let y = convert(value);
console.log(y);

//Please input the string containing only numbers

// let a = 5;
// if (a + 0 == a) {
//     console.log(a + 0, 'a is number')
// } else {
//     console.log(a + 0, 'a is not a number')
// }
