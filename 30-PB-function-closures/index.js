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

function multiplier(a) {
    return function multiplier(b) {
        return a * b;
    };
}
let mult = multiplier(3)(4);
console.log(mult);

console.log('3.');

(function (actAge, retAge, wage, percentage) {
    if (actAge >= 65) {
        console.log('You\'re already retired!');
    } else
        console.log((retAge - actAge) * (wage) * (percentage * 0.1));
})(77, 65, 2000, 5);