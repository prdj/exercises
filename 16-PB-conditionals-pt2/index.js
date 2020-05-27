'use strickt';

console.log('1.')

let marksMass = 30;
let marksHeight = 2;
let jonhsMass = 29;
let jonhsHeigth = 1.5;

let marksBmi = marksMass / (marksHeight * marksHeight);
let jonhsBmi = jonhsMass / (jonhsHeigth * jonhsHeigth);

let markHigherBmi = true;

console.log(`marks bmi = ${marksBmi} jonhs bmi ${jonhsBmi}`);

if (marksBmi > jonhsBmi) {
    console.log('Mark\'s');
} else {
    console.log('John\'s');
}