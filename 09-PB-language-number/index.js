'use strict';

console.log('1-)')
let introSentence = "Hello, my name is Fran and I am";
let age = 25;
console.log(introSentence + ' ' + age + '.');

console.log('2-)')
let exNumber = '1005';
let exfloatNumber = '10.05';
exNumber = parseInt(exNumber);
exfloatNumber = parseInt(exfloatNumber);
console.log(`${exNumber} \n${exfloatNumber}`);


console.log('3-)')
let numberOne = 30;
let numberTwo = 939;
let numberThree = 40.9;

numberOne = numberOne % 2 === 0 ? '30 is even.' : '30 is odd.'
console.log(numberOne);

numberTwo = numberTwo % 2 === 0 ? '939 is even.' : '939 is odd.'
console.log(numberTwo);

numberThree = numberThree % 2 === 0 ? '40.9 is even.' : '40.9 is odd.'
console.log(numberThree);
