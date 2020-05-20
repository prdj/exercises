'use strict';

console.log('1a-)')
console.log(Math.min(-1, 0, 1, 2 , 3, 4));

console.log('1b-)')
console.log(Math.max(-1, 0, 1, 2 , 3, 4));

console.log('2a-)')
console.log(Math.ceil(75), Math.ceil(76788.7), Math.ceil(-9.78),Math.ceil(43.342));

console.log('2b-)')
console.log(Math.floor(3321.32321), Math.floor(326.76), Math.floor(76788.7), Math.floor(-9.78), Math.floor(28.329));

console.log('3-)')
let min = 1;
let max = 6;
let random = Math.random() * (+max - +min) + +min; 
console.log(Math.ceil(random));