let a = 50;
let b = 0;
// blocks of exception handling
try {
    if (b != 0) {
        c = a / b;
        console.log(c)
    } else {
        throw ('b cant be 0');
    }
}
catch (e) {
    console.log(e);
}
finally {
    console.log('task done..')
}

let x = 'as';
let y = 'rtest';

let sum = Math.abs(x) + Math.abs(y);
let negativeError = x < 0 || y < 0 ? true : false;
let typeError = typeof x != 'number' || typeof y != 'number' ? true : false;
try {

    if (typeError) {
        throw ('only numbers are allowed')
    }
    if (negativeError) {
        throw ('only positive values are allowed')
    }
}
catch (e) {
    console.log(e)
}
finally {
    if (sum > 0) {
        console.log(sum)
    }
    console.log('task completed..')
}