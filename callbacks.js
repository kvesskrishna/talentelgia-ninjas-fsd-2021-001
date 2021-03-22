

//definition is present in js engine
// function setTimeout(callback, timeinms) {
//     // does something...
// }




function printName(name) {
    console.log(name)
}

// printName('John');
console.log('hello')
// setTimeout(printName('John'), 5000); // call a function with parameter, that will not runs after 5 seconds
setTimeout(function () { printName('John') }, 1000); // call a function with parameter, that runs after 5 seconds
// setInterval(function () { printName('Alex') }, 2000);

console.log('bye bye');
a = 4; b = 9;
console.log(a + b);
setTimeout(function () { console.log('wait') }, 900);