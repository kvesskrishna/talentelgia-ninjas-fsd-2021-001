var myarray = [1, 2, 3, 4]; //homogenous
var yourarray = [1, 'two', [3]]; // heterogeneous
console.log(myarray, yourarray);

var user = {
    'fname': 'john',
    'lname': 'doe',
    'email': 'john@doe.com',
    'address': { door: 34, street: 'Louis st.', city: 'NY' }, // heterogeneous
    'hobbies': ['swimming', 'painting'], // homogeneous
    'key': 'mykey'
}; // object
var userstring = JSON.stringify(user); // convert json to string
var testdata1 = '{"name": "alex", "age": 45}';
var testdata2 = JSON.parse(testdata1); // convert string to json
console.log(testdata1, testdata2, user.address, userstring); //

localStorage.setItem('td2', testdata1);
var td2 = JSON.parse(localStorage.getItem('td2'));
console.log(td2); //
// objects
// ARRAYS
for (key in user) {
    let fn = 'fname'
    console.log(key, user[key], user.fname, user['fname'])
}

// JSON - JAVASCRIPT OBJECT NOTATION

// find length of array - array.length()
// add new element to end of arrays - array.push(element)
// add new element to front of array and - array.unshift(element)
// remove element from end of array - array.pop(), and remove element from front of array - array.shift()
// add element at middle of an array - array.slice() and remove element from middle of array - array.splice()
// loop thrugh an array without using for loop - array.forEach(callback)
// convert or transform each element of an array - array.map(callback)
// filter an array based on a condition - array.filter(callback)
// convert a string into array - swimming, painting, cycling hobbies.split(',')
// convert an array into string - [1, 2, 3] array.join('-') => 1 - 2 - 3


var numbers = [12, 23, 45, 65, 32, 23, 63, 12, 67];
console.log('no. of numbers in numbers', numbers.length)
numbers.push(99);
console.log('numbers after pushing 99', numbers)
numbers.unshift(88)
console.log('numbers after unshifting 88', numbers)
numbers.pop();
console.log('numbers after popping ', numbers)
numbers.shift();
console.log('numbers after shifting ', numbers)
// indexing starts from 0 (counting position - 1)
console.log('print element at index 4', numbers[4])
// insert 77 after 65 -> add 77 at index 4
// numbers.splice(3);
console.log(numbers.splice(4, 0, 77, 66), numbers) // mutating original array

// delete an element from index 7
console.log(numbers.splice(7, 1), numbers)
var newnumbers = numbers.slice(3, -1); // 3 starting index (inclusive), 7 closing index (exclusive) - without mutate original array
console.log(newnumbers, numbers);

// forEach -> used to loop through every element and do something with it
// numbers array, print whether a number is even or odd
// forEach -> array.forEach(callback{do something with each element})

function add(a, b) {
    console.log(a + b);
} // function expression

//arrow function statement

var add = a => console.log(a + 5);
// let (variables),const (constants)-es6 => block scoped
// var fun, global scoped

var good = true;
const nationality = 'Indian'
if (good) {
    let trustable = true;
    // nationality = 'American'
    console.log(good, trustable);//true, undefined/not defined

}

console.log(good);//true, undefined/not defined

for (var i = 0; i < numbers.length; i++) {
    let type = numbers[i] % 2 == 0 ? 'even' : 'odd';
    console.log(`${numbers[i]} is ${type}, and it is at ${i} position`);
}
numbers.forEach((n, index) => {
    let type = n % 2 == 0 ? 'even' : 'odd';
    console.log(`${n} is ${type}, and it is at ${index} position`);
})
// let temp = []
// numbers.forEach((n, i) => {
//     temp.push(n * 2);
// })
// console.log(temp)

let temp = numbers.map((n) => n * 2);
console.log(temp)

let evens = numbers.filter((n) => n % 2 == 0)
console.log(evens)




var products = [
    { id: 1, title: 'mobile', price: 1234, discount: 10 },
    { id: 2, title: 'tshirt', price: 1023, discount: 10 },
    { id: 3, title: 'shoes', price: 765, discount: 15 },
    { id: 4, title: 'tv', price: 2000, discount: 17 },
];
// print all the products whose price is greater than 1000 after discount;

products.forEach((product) => {
    product.finalPrice = product.price - (product.price * product.discount) / 100;
})
console.log(products)
finalProducts = products.filter(product => product.finalPrice > 1000);
console.log(finalProducts);

finalProducts2 = products.map(product => {
    product.finalPrice = product.price - (product.price * product.discount) / 100;
    return product;
}).filter(product => product.finalPrice > 1000);
console.log(finalProducts2);

const webpagedata = {
    title: 'Courses',
    bgcolor: 'wheat',
    fontColor: '#333',
    courses: [
        { id: 1, title: 'PHP', price: 10, discount: 10, thumbnail: 'http://placehold.it', rating: 5 },
        { id: 2, title: 'HTML', price: 6, discount: 3, thumbnail: 'http://placehold.it', rating: 4 },
        { id: 3, title: 'JS', price: 12, discount: 5, thumbnail: 'http://placehold.it', rating: 5 },
        { id: 4, title: 'Angular', price: 15, discount: 2, thumbnail: 'http://placehold.it', rating: 3 },
    ],
    testimonials: [
        { testimonial: 'lorem', author: 'james', image: 'http://placehold.it' },
        { testimonial: 'lorem', author: 'jack', image: 'http://placehold.it' },
        { testimonial: 'lorem', author: 'jajmes', image: 'http://placehold.it' },
    ],
    regForm: [
        { type: 'input', name: 'fname', validators: { required: true, email: false, password: false, minlength: 4 } },
        { type: 'input', name: 'lname', validators: { required: true, email: false, password: false, minlength: 4 } },
        { type: 'email', name: 'email', validators: { required: true, email: true, password: false, minlength: 0 } },
        // checkbox set with courses from courses array
        { type: 'password', name: 'pwd', validators: { required: true, email: false, password: true, minlength: 8 } },
        { type: 'submit', name: 'submit' },
    ],
    footer: 'All rights reserved. copy - 2021'
}