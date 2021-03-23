var title = 'something about objects';
// document.write(title);
console.log(title);
var firstname = 'Jerry';
var user = {
    firstname: 'John',
    lastname: 'Smith',
    email: 'john@email.com',
    dob: new Date(2000, 04, 23),
    age: function () { return this.dob.getFullYear() },
    fullname: function (fname = this.firstname, lname = this.lastname) { return fname + ' ' + lname; },
    // typeoffname: () => this.firstname // arrow function - function statement
    typeoffname: function () { return this.firstname } // function expression
}

console.log(user.age(), user.typeoffname());
console.log(user.fullname('John', 'Mike'));
console.log(user.fullname(user.firstname, 'Alex'));//

var calculator = {
    num1: 0,
    num2: 0,
    add: function (a, b) { this.num1 = a; this.num2 = b; return this.num1 + this.num2; },
    sub: function (a, b) { this.num1 = a; this.num2 = b; return this.num1 - this.num2; },
    mul: function (a, b) { this.num1 = a; this.num2 = b; return this.num1 * this.num2; },
    div: function (a, b) { this.num1 = a; this.num2 = b; return this.num1 / this.num2; },
}

console.log(calculator.add(5, 6));
console.log(calculator.mul());

console.log(calculator.num1)

var users = [{ fname: 'john', lname: 'doe', email: 'john@doe.com' }, { fname: 'alex', lname: 'smith', email: 'a@sm.com' }, { fname: 'kate', lname: 'paul', email: 'k@p.com' }]; // array of user records
var cols = Object.keys(users[0]); // return an array of keys of a object
// aim - to print the users in a table **dynamically -> cols and rows are dynamic
// ways to print 'doe'
// console.log(users[0].lname); // prints doe
// console.log(users[0]['lname']); // print doe
// console.log(cols)

// generate columns
var row = ''; //placeholder for tr under thead
for (var i = 0; i < cols.length; i++) {
    row += `<th>${cols[i]}</th>`; // template/string literals - es6 - a=a+1 => a+=1
    // '<th>' + cols[i] + '</th>';
}
document.querySelector('table thead tr').innerHTML = row; // generate table heading with cols


// generate rows
row = ''; // reinitialising rows variable to be empty
for (var i = 0; i < users.length; i++) { // looping through every user object in users array
    var keys = Object.keys(users[i]); // capturing the keys of that particular user
    var record = ''; // placeholder for td for each key
    for (var j = 0; j < keys.length; j++) { // loop on every key for that user
        record += `<td>${users[i][keys[j]]}</td>`; // logic as in line 39
    }
    row += `<tr>${record}</tr>`; //append html for tr of the user
}
console.log(row);
document.querySelector('table tbody').innerHTML = row; // generate table heading with cols


