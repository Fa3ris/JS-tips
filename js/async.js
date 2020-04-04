
// callback
function logName(arg){
    console.log(`the number drawn is ${arg}`);
}

function promptUser(callback) {
    const arg = Math.round(Math.random() * 10);
    callback(arg);
}

promptUser(logName);

function oneOutOfTwo(successCallback, failureCallback) {
    setTimeout(
        () => {console.log('c\'est fait');
        if (Math.random() >= .5) {
            successCallback();
        } else {
            failureCallback();
        }
    });
}

oneOutOfTwo(() => console.log('Success callback'), () => console.error('Error callback'));


// Promise
// my aync function
function asyncWork() {
    return new Promise((resolve, reject) => {
        if (Math.random() > .5) {
            resolve("Réussite");
          } else {
            reject("Échec");
          }
    })
}

asyncWork().then(res => console.log(`Success callback ${res}`), err => console.error(`Error callback ${err}`));


// See JS event loop