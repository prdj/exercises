'use strict';

console.log('1-)');

const orders = [{
        amount: 250
    },
    {
        amount: 400
    },
    {
        amount: 100
    },
    {
        amount: 325
    }
];

let result = orders.map(a => a.amount);
var sum = result.reduce(
    (a, b) => a + b,
    0
);
console.log(sum);


console.log('2-)');

const arrayOfNumbers = [3, 45, 6, 56, 7, 9];

const newArray = arrayOfNumbers.map(function (value) {
    return value + 1;
})

console.log(newArray);


console.log('3-)');
const filterEvens = (x) => {
    return x.filter(function (val) {
        return val % 2 === 0
    })
}

console.log(filterEvens([1, 2, 3, 11, 12, 13]));
console.log(filterEvens([22, 2, 31, 110, 6, 13]));


console.log('4-)');

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

const filterItems = (a, b) => {

    return a.filter(el => el.toLowerCase().indexOf(b.toLowerCase()) !== -1)
}

console.log(filterItems(friends, 'ka'));
console.log(filterItems(friends, 'e'));



console.log('5-)');

const sum2 = (x) => {
    return x.reduce(
        (a, b) => a + b,
        0
    );
}

console.log(sum2([1, 2, 3, 4, 5]));
console.log(sum2([6, 7, 7]));



console.log('6-)');

const arr3 = [3, 5, 8, 2];

arr3.map(Math.sqrt);

console.log(arr3.map(Math.sqrt));git