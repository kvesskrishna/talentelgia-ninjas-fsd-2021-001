var a = 4;
var b = 5;
// console.log(u)//undefined

var doubleAdd = function (p, q) {
    return (2 * p + 2 * q);
    // console.log(z);
    // var w = 0;

}
var tripleAdd = function (p, q) {
    return (3 * p + 3 * q);
    // console.log(z);
    // var w = 0;

}
var add = function (x, y, callback) {
    // var z = 9;
    console.log(x + y);

    return callback(x, y);
}

// var u = 8;

console.log(add(a, b, doubleAdd));
console.log(add(a, b, tripleAdd));
