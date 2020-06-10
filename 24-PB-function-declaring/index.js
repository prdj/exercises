'use strict';

console.log('Ex-1');

function exOne(a, b) {
    console.log(a * b);
}
exOne(0, 1);

console.log('Ex-2');

const exTwo = function (a, b) {
    console.log(a * b);
}
exTwo(2, 3);

console.log('Ex-3');

const exThree = (a, b) => {
    console.log(a * b);
}

exThree(1, 2);

console.log('Ex-4');

function exFourA(a, b) {
    let remainder = a % b;
    remainder === 0 ? console.log(`0`) : console.log(`Remainder is ${remainder}`);
}
exFourA(30, 5);

const exFourB = function (a, b) {
    let remainder = a % b;
    remainder === 0 ? console.log(`0`) : console.log(`Remainder is ${remainder}`);
}
exFourB(3, 5);

const exFourC = (a, b) => {
    let remainder = a % b;
    remainder === 0 ? console.log(`0`) : console.log(`Remainder is ${remainder}`);
}
exFourC(19, 5);