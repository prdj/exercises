'use strict';


console.log('1.');
let isDog = true;

let answer = isDog ? ('pat,pat') : ('find me a dog to pat!');
/* if (true) {
    isDog = 'pat,pat';
} else {
    isDog = 'find me a dog to pat!';
} */
console.log(answer);


console.log('2.');
let speedlimit = 50;
let speedCheck = 30;
let howFast = speedCheck > speedlimit ? ('You are going too fast!') : ('You are driving below the speed limit, Oma.');

/* if (speedlimit < 50) {
    speedCheck = 'You are going too fast!';
} else {
    speedCheck = 'You are driving below the speed limit, Oma.';
} */
console.log(howFast);

console.log('3.');
let age = 33;
let printAge = age < 10 ? ('Serve butter beer.') : ('Serve beer.');
/* if (age < 16) {
    age = 'Serve butter beer.';
} else {
    age = 'Serve beer.';
} */
console.log(printAge);

console.log('4.');
let isStudent = false;
let printTicket = isStudent == true ? ('Ticket costs €5,00.') : ('Ticket costs €12,00.');
/* if (true) {
    isStudent = 'Ticket costs €5,00.';
} else {
    isStudent = 'Ticket costs €12,00.';
} */
console.log(printTicket);


console.log('5.');
let cake = true;
let okMarie = cake == false ? ('Let them eat cake.') : ('Oh, bother.');
/* if (cake) {
    okMarie = 'Let them eat cake.';
} else {
    okMarie = 'Oh, bother.';
} */
console.log(okMarie);