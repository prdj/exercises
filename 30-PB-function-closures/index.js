'use strict';


console.log('1.');

function sum(a) {
    return function sum(b) {
        return a + b;
    };
}
let result = sum(3)(4);
console.log(result);



console.log('2.');
//anonymos function
const multiplier = function (a) {
    return function multiplier(b) {
        return a * b;
    };
}
console.log(multiplier(3)(4));


console.log('3.');

(function (actAge, retAge, wage, percentage) {
    if (actAge >= 65) {
        console.log('You\'re already retired!');
    } else
        console.log(((retAge - actAge) * (wage * 1.2)) * (percentage * 0.01));
})(40, 65, 2000, 5);