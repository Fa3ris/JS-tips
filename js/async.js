// callback
function logName(arg){
    console.log(`the number drawn is ${arg}`);
}

function promptUser(callback) {
    const arg = Math.round(Math.random() * 10);
    callback(arg);
}

promptUser(logName);