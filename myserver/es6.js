// var a = 0 // scope at function level / global
// let b = 3 // block scope
// b = 6
// const c = 9 // block scope, cant be changed
// c = 5

function mydemo() {
    var x = 5;
    var status = false;
    if (x > 0) {
        let status = true;
        console.log(x + ' is ' + status) // 5 is true
    }
    console.log(x) // 5
    console.log(status) // not defined
}

mydemo();