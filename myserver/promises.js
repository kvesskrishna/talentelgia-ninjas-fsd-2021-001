const delayedfun = () => {

    for (let i = 0; i < 10000000; i++) {
        return new Date();
    }
}

const printDate = (date) => {
    console.log(date)
}

const showError = (error) => {
    console.log(error)
}

const printMsg = (msg) => {
    console.log(msg)
}

let mypromise = new Promise((resolve, reject) => {
    if (delayedfun()) {
        resolve(delayedfun());
    } else {
        reject('cannot run delayedfun..')
    }
});

// mypromise.then(printDate).catch(showError);
// printMsg('coming after promise call..')

async function asyncawait() {
    await mypromise;
    printMsg('called directly after await');
}

asyncawait()