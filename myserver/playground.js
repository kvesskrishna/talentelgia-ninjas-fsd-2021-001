function greet(name) { // parent function
    // morning();
    age = 34
    return function morning() { // child function
        return 'Good Morning ' + name + ' is ' + age + ' years old'
    }
}

// let greeting = greet('joe');
// console.log(greeting())
let printgreet = greet('dennis')();
console.log(printgreet)


function salary(type) { // parent function
    let defaultSal = 1000;
    switch (type) {
        case 'bonus':
            return function () { // child function
                return defaultSal + 200;
            }
        case 'deduct':
            return function () { // child function
                return defaultSal - 200;
            }
        default: return 'invalid type'

    }
}

let result = salary('bonus');
console.log(result())
let result2 = salary('deduct');
console.log(result2())