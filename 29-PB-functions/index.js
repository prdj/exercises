'use strict';

console.log('1-');
const addUp = (x) => {
    let result = (x / 2) * (1 + x);
    return result;
}
let answer = addUp(4);
console.log(answer);

console.log('2-');
const sumOfCubes = (x, y, z) => {
    let result = x ** 3 + y ** 3 + z ** 3;
    console.log(result);
}
sumOfCubes(1, 5, 9);

console.log('3-');
const dictionary = (a, b) => {
    if (typeof a === "string" && typeof b === "string") {
        if (a.substring(0, 1) === b.substring(0, 1)) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
dictionary('bu', 'button');

console.log('4-');
const lessThanOrEqualToZero = (x) => {
    if (x <= 0) {
        console(true);
    } else {
        console.log(false);
    }
}
lessThanOrEqualToZero(3);

console.log('5-');
const countOccurrences = (a, b) => {
    if (typeof a === "string") {
        console.log(a.split(b).length - 1);
    }
}
countOccurrences('this is a string', 'i');

console.log('6-');
const exSix = (a, b) => {
    console.log(a ** b);
}
exSix(10, 10);

console.log('7-');
const dogAge = (x) => {
    console.log(x * 7);
}
dogAge(3);

console.log('8-');
const calcSupply = (a, b) => {
    if (a<=80) { 
        let yearsLeft = 80 - a;
        console.log(yearsLeft*365*b);
    }
}
calcSupply(40,3);



console.log('9-');
const isWaldoHere = (x) => {
    if (typeof x === "string" && x.split('waldo').length - 1 >= 1) {
        console.log(true);
    } else {
        console.log(false);
    }
}
isWaldoHere('aldo is here');


console.log('10-');
const equalSlices = (a, b, c) => {
    if ( b*c <= a ){
        console.log(true);
    } else {
        console.log(false);
    }
}

equalSlices(11, 5, 3);

console.log('11-');
const exEleven = (s) => {
    if (typeof s === "string" && s.split('x').length - 1 === s.split('o').length - 1){
        console.log(true);
    } else {
        console.log(false);
    }
}
exEleven('ooxxx');

console.log('12-');
const isPrime = (n) => {
    if(n > 1 && n % 2 != 0 && n % 3 !=0 ) {
        console.log(true);
    } else {
        console.log(false);
    }
}
isPrime(10);

console.log('13-');
const validateEmail = (e) => {
    if (e.split('@email.com').length - 1 === 1 && e.length > 10){
        console.log(true);
    } else {
        console.log(false);
    }
}

validateEmail('P@email.com');