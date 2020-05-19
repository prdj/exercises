'use strict';

console.log('1.')
let exOne = 'I can walk in the park all day!';
console.log(exOne.substring(18, 22));

console.log('2.')
let exTwo = 'Hello World';
exTwo = exTwo.toUpperCase();
console.log(exTwo);

console.log('3.')
let exThree = 'Hello Earthling';
exThree = exThree.toLowerCase();
console.log(exThree);

console.log('4.')
let exFour = 'JavaScript';
console.log(exFour.substring(3, 6));

console.log('5.')
let exFive = 'nice shoes';
console.log(`Is l icluded:${exFive.includes('l')}.\nIs n included:${exFive.includes('n')}.`);
/* console.log(exFive.includes('l'));
console.log(exFive.includes('n'));
 */
console.log('6.')
let exSix = 'Bananas';
console.log(`${exSix[0]}${exSix}${exSix[0]}`);

console.log('7.')
let exSeven = 'Scritch';
console.log(`${exSeven.substring(4)}${exSeven}${exSeven.substring(4)}`);

console.log('8.')
let exEight = 'BoogieWoogie'
console.log(`${exEight[exEight.length-1]}${exEight.substring(1,11)}${exEight[0]}`);

console.log('10.')
let exNine = 'the quick brown fox.';
console.log(exNine[0].toUpperCase() + exNine.substring(1, 21));