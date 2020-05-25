'use strict';
console.log('1.')

// NaN stands for Not a Number.

console.log(`Is hello NaN: ${isNaN('Hello')}.`);
console.log(`Is 3 NaN: ${isNaN(3)}.`);
console.log(`Type of NaN: ${typeof NaN}.`);

console.log('2.')

let exTwo = 0.1 * 0.2;
exTwo = exTwo.toFixed(2);
console.log(exTwo);

console.log('3.')

console.log(`infinity divided by 0: ${Infinity / 0}.`);
console.log(`infinity divided by infinity: ${Infinity / Infinity}.`);
console.log(`1 divided by 0: ${1 / 0}.`); 