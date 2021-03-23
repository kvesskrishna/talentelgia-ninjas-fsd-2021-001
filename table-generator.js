// get the columns of a table

// merge all the colums from every record
var merged = [];
for (var i = 0; i < data.length; i++) {
    var keys = Object.keys(data[i]);
    for (j = 0; j < keys.length; j++) {
        merged.push(keys[j])
    }
}
console.log(merged)
// get the unique colums from merged columns
cols = [];
for (var i = 0; i < merged.length; i++) {
    if (cols.indexOf(merged[i]) == -1) {
        cols.push(merged[i]);
    }
}
console.log(cols)
// var cols = Object.keys(data[1]); // return an array of keys of a object
// aim - to print the users in a table **dynamically -> cols and rows are dynamic
// ways to print 'doe'
// console.log(users[0].lname); // prints doe
// console.log(users[0]['lname']); // print doe
// console.log(cols)

// generate columns
var row = ''; //placeholder for tr under thead
for (var i = 0; i < cols.length; i++) {
    row += `<th>${cols[i].toUpperCase()}</th>`; // template/string literals - es6 - a=a+1 => a+=1
    // '<th>' + cols[i] + '</th>';
}
document.querySelector('table thead tr').innerHTML = row; // generate table heading with cols


// generate rows
row = ''; // reinitialising rows variable to be empty
for (var i = 0; i < data.length; i++) { // looping through every user object in users array
    var keys = Object.keys(data[i]); // capturing the keys of that particular user
    console.log(keys)
    var record = ''; // placeholder for td for each key
    for (var j = 0; j < cols.length; j++) { // loop on every key for that user

        console.log('data', data[i][cols[j]])
        record += `<td>${data[i][cols[j]] ? data[i][cols[j]] : ''}</td>`;
        // logic as in line 39
    }
    row += `<tr>${record}</tr>`; //append html for tr of the user
}
console.log(row);
document.querySelector('table tbody').innerHTML = row; // generate table heading with cols

