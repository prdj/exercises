'use strict';

console.log('1-)');

const checkNum = (x, y) => {
    if (x >= y.min && x <= y.max) {
        return true;
    } else {
        return false;
    }

}

console.log(checkNum(4, {
    min: 0,
    max: 5
}));
console.log(checkNum(4, {
    min: 4,
    max: 5
}));
console.log(checkNum(4, {
    min: 6,
    max: 10
}));
console.log(checkNum(5, {
    min: 5,
    max: 5
}));


console.log('2-)');
const tiles = [{
        tile: "N",
        score: 1
    },
    {
        tile: "K",
        score: 5
    },
    {
        tile: "Z",
        score: 10
    },
    {
        tile: "X",
        score: 8
    },
    {
        tile: "D",
        score: 2
    },
    {
        tile: "A",
        score: 1
    },
    {
        tile: "E",
        score: 1
    }
]

var sum = tiles.reduce((sum, a) => {
    return sum + a.score;
}, 0);

console.log(sum);

console.log('3-)');

function empty(obj) {
    var i = 0;
    for (var key in obj) {
        ++i;
    }
    return (i > 0) ? false : true;
}
console.log(empty({}));
console.log(empty({
    a: 1
}));

console.log('4-)');

function countLetters(str) {
    let myarr = [];
    const counts = {};
    myarr = str.split('');
    myarr.forEach((letter) => {
        counts[letter] = counts[letter] ? (counts[letter] += 1) : 1;
    });
    return counts;
}

console.log(countLetters("tree"));

console.log('5-)');
let output = {};
const freeShipping = (obj) => {
    output = Object.values(obj);
    var sum = output.reduce(
        (a, b) => a + b,
        0
    );
    return sum >= 50 ? true : false;
}

console.log(freeShipping({
    "Sponge": 3.50,
    "Soap": 5.99
}));

console.log(freeShipping({
    "Surround Sound Equipment": 499.99
}));

console.log('6-)');

const programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push('go');
programming.difficulty = 7;
delete programming.jokes;
programming.isFun = true;


console.log(programming);

for (let i = 0; i < programming.languages.length; i++) {
    console.log(programming.languages[i]);
}

for (let i = 0; i < programming.length; i++) {
    console.log(programming.languages[i]);
}



console.log(Object.values(programming));