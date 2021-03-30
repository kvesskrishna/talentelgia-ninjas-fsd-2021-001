async function isEven(n) {
    try {
        // let x = 2
        if (n % x == 0) {
            return 'true';
        } else {
            return 'false';
        }
    } catch (e) {
        return 'there is an error!' + e
    }
}

// console.log(isEven(4))
isEven(4).then(data => console.log(data)).catch(e => console.log(e))
console.log('the last line')