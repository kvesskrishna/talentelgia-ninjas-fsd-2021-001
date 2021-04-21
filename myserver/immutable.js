var a = 5;
var b = a; // copying the value from a => numbers, strings, booleans are primitive datatypes
b = 8; // immutable
console.log(a, b) // 5,8

var x = [1, 2, 3]
var y = [...x, 5, 8, 9]; // copying only reference of x => arrays and objects are reference datatypes
y.push(4); // mutates x mutation=change
console.log(x, y) //x=[1,2,3], y=[1,2,3,4]
//x=[1,2,3,4], y=[1,2,3,4]


var p = { name: 'tom', age: 40 };
var q = { ...p, name: 'joe' };
q.age = 78;
console.log(p, q) //p=?, q=?


function sum(...a) { // rest operator
    sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}

// console.log(sum([1, 2, 3, 4, 5]))
console.log(sum(1, 2, 3, 4, 5))

