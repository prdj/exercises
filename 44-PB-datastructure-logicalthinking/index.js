'use strict';

console.log('1-)');

const low = (arr) => {
    return arr.sort(function (a, b) {
        return a - b;
    });
}

console.log(low([4, 2, 5, 3, 9, 7, 1, 8, 2, 6]));


console.log('2-)');

const alphabeticalOrder = (arr) => {
    return arr.sort();
}

console.log(alphabeticalOrder(["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"]));


console.log('3-)');

const length = (arr) => {
    return arr.sort(function (a, b) {
        return b.length - a.length;
    });
}

console.log(length(["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"]));