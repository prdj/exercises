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
const lessThanOrEqualToZero = x => x <= 0;

let hhh = lessThanOrEqualToZero(3);
console.log(hhh);
hhh = lessThanOrEqualToZero(0);
console.log(hhh);
hhh = lessThanOrEqualToZero(-4);
console.log(hhh);
hhh = lessThanOrEqualToZero(10);
console.log(hhh);

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
exSix(5, 5);
exSix(10, 10);
exSix(3, 3);

console.log('7-');
const dogAge = (x) => {
    let age = x*7;
    return `Your doggo is ${age} years old in human years!`;
}
console.log(dogAge(3));

console.log('8-');
const calcSupply = (a, b) => {
    if (a<=80) { 
        let yearsLeft = 80 - a;
      /*   console.log(yearsLeft*365*b); */
        return `You will need ${yearsLeft*365*b} bars of chocolate.`;
    }
}
console.log(calcSupply(25,2));



console.log('9-');
const isWaldoHere = (x) => {
    if (typeof x === "string" && x.toLowerCase().split('waldo').length - 1 >= 1) {
        return true;
    } else {
        return false;
    }
}
console.log(isWaldoHere('is there wal here ?'));
console.log(isWaldoHere('I found you Waldo!'));
console.log(isWaldoHere('is wally here?'));
console.log(isWaldoHere('waldo is here'));


console.log('10-');
const equalSlices = (a, b, c) => {
    if ( b*c <= a ){
        return true;
    } else {
        return false;
    }
}
console.log(equalSlices(8, 3, 2));
console.log(equalSlices(8, 3, 3));
console.log(equalSlices(24, 12, 2));

console.log('11-');
const exEleven = (s) => {
    if (typeof s === "string" && s.toLowerCase().split('x').length - 1 === s.toLowerCase().split('o').length - 1){
        return true;
    } else {
        return false;
    }
}
console.log(exEleven('ooxx'));
console.log(exEleven('xooxx'));
console.log(exEleven('ooxXm'));
console.log(exEleven('zpzpzpp'));
console.log(exEleven('zzoo'));

console.log('12-');
const isPrime = (n) => {
    if(n > 1 && n % 2 != 0 && n % 3 !=0 ) {
        return true;
    } else {
        return false;
    }
}
console.log(isPrime(7));
console.log(isPrime(9));
console.log(isPrime(10));

console.log('13-');
const validateEmail = (e) => {
    if (e.split('@').length - 1 === 1 && e.split('.').length - 1 >= 1 && e.indexOf('@') > 0){
        return true;
    } else {
        return false;
    }
}
console.log(validateEmail('john@example.com'));
console.log(validateEmail('pedrojr_dantas@hotmail.com'));
console.log(validateEmail('@hotmail.com'));
console.log(validateEmail('@example.com'));
console.log(validateEmail('a@b.com'));
console.log(validateEmail('john@example.co.uk'));