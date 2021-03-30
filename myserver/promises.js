//async -> waitng for a task to get completed
// callback, promise

// user story

// calculate the date 10000000 times and return to print it.

// callback that loops and prints date and
const looper = () => {

    let date;
    for (let i = 0; i < 10000000; i++) {
        date = new Date();
    }
    return date;
    // return false;
}
const printData = (msg) => {
    console.log(msg) // this waits for previous code to complete - sync
}

// promises


// user story -
// Krisha promises to inform management about his presence the next day by 9am -> promise
// =
// = Mangaement continues other operations ( when the promise is pending...)
// =
// possiblities of promise at 9 am -> 1. Krishna may attend (Resolve), 2. Krishna may not attend (Reject)
// Management action -> 1. Resolves -> inform and share session link to students - then(), 2. Rejected -> engange another trainer, create link and share to students - catch()


// A, B, C, D on Thursday => A promised party to B coming saturday.If A gives party, B will party with A.Else B will party with C.Meanwhile i.e on Friday B continues party with D.


let decision = (day, msg) => {
    console.log(day, msg)
}
// ON THURSDAY
decision('THU', 'take promise from A')

let A = new Promise((resolve, reject) => {
    let givingParty = false;
    if (givingParty == true) {
        resolve();
    } else {
        reject();
    }
})


//ON SATURDAY

A.then(() => decision('Sat', 'Party with A')).catch(() => decision('Sat', 'Party with C'));

// ON FRIDAY

decision('FRI', 'Party with D')



// let loopdate = new Promise((resolve, reject) => {
//     if (looper()) {
//         resolve(looper());
//     } else {
//         reject('promise is rejected');
//     }
// });

// // after promise is completed
// loopdate.then(data => printData(data)).catch(error => printData(error))

// printData('This is written after promise call...')