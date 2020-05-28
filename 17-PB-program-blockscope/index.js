'use strict';

console.log('1.')

let determiner = 9;
let x
if (determiner < 0) {
    let x = determiner;
    console.log(x);
}
console.log(x);
if (determiner > 0) {
    let x = determiner;
    console.log(x);
}

console.log('2.')
if (determiner >= 0) {
    let updater = determiner;
    console.log(updater);
    let message = 10;
    console.log(message);
}

//console.log(message)
// ReferenceError: message is not defined

console.log('3.')
// It is just more easy to use if when you deal with many variables for one same Condition.
console.log(determiner === 0 ? `${determiner}` : `${determiner + 1}`);
// With termary I lose one of my statments.

if (determiner === 0) {
    console.log(determiner);
} else {
    console.log(determiner + 1);
    console.log(determiner + 2);
}