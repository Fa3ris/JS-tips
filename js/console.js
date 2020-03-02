const style = 'color : red; font-weight : bold; font-size : 20px; font-family: Courier';

console.log('%c BASIC', style);

const hachiman = {lastname: 'Hikigaya', firstname: 'Hachiman' };
const yukino = {lastname: 'Yukinoshita', firstname: 'Yukino' };
console.log({hachiman, yukino});


console.log('%c TABLE', style)
console.table([hachiman, yukino]);

console.log('%c TIME', style)
console.time('whileLoop');
let i = 0;
while (i < 1000000) i++;
console.timeEnd('whileLoop');


console.log('%c TRACE', style)
a();
function a() {
    b();
}
function b() {
    console.trace('b is executing');
}

