'use strickt';

console.log('1.')

let marksMass = 30;
let marksHeight = 2;
let jonhsMass = 29;
let jonhsHeigth = 1.5;

let marksBmi = marksMass / (marksHeight * marksHeight).toFixed(2);
let jonhsBmi = jonhsMass / (jonhsHeigth * jonhsHeigth).toFixed(2);

let marksHigherBmi = marksBmi > jonhsBmi;
console.log(marksHigherBmi);

console.log(`Is Mark's BMI higher than John's? Why yes, it's ${marksHigherBmi}, it is`);

if (marksBmi > jonhsBmi) {
    console.log('Mark\'s');
} else {
    console.log('John\'s');
}