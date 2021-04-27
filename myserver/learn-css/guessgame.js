let actualnumber = 0;
let score = 0;
let userguess = 0;
let result = 'Please enter your guess!'

// refresh values
function refresh(a) {
    if (a == '?') {
        score = 0;
    }
    document.querySelector('.score span').innerText = score;
    document.querySelector('.result').innerText = result;

    // generating a random number
    actualnumber = Math.floor(Math.random() * 10);
    console.log(actualnumber)
    // mask the actual number
    document.querySelector('.actual').innerText = a;
}

refresh('?');
// collect user input

function validate() {

    userguess = document.querySelector('input').value;
    if (parseInt(userguess) + 0 != parseInt(userguess)) {
        alert('Only numbers allowed!!')
    }
    if (userguess == actualnumber) {
        score++;
        result = 'You are right!'
        document.querySelector('.actual').style.backgroundColor = 'green';
        refresh(actualnumber);
    } else {
        score--;
        result = 'You are wrong!'
        document.querySelector('.actual').style.backgroundColor = 'red';
        refresh(actualnumber);
    }
}