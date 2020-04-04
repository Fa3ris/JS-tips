let a = {};

try {
    a.run();
} catch (e) {
    console.log('method failed', e);
} finally {
    console.log('excecute anyway');
}



function alwaysThrowError() {
    throw new Error('will always generate an error');
}

try {
    alwaysThrowError();
} catch (e) {
    console.log("catch this damn error")
} finally {
    console.log("I still do what I want");
}

console.log("Script can continue");