'use strict';

console.log('1-)');

const sumOfNumber = () => {
    let myArr = [];
    let sum = 0;
    for (let i = 1; i < 10; i++) {
        myArr.push(i);
        sum = myArr.reduce((a, b) => a + b);
    }
    return `Array: [${myArr}] Sum Of Array: ${sum}`;
}
console.log(sumOfNumber());

console.log('2-)');

const helloFriends = (x) => {
    let output = '';
    for (let i = 0; i < x.length; i++) {
        output += 'Hello ' + x[i] + '.' + ' You are at index ' + [i] + ' of my friends array.\n';
    }
    return output;
}

console.log(helloFriends(['pedro', 'joao', 'maria', 'joana', 'jose', 'joaquim', 'jumira']));


console.log('3-)');

const cityNames = (x) => {
    let output = '';
    for ( let i = 0; i < x.length; i++){
        output += x[i].split(',');
    }
    return output;
}

console.log(cityNames(['Berlin', 'Prague', 'Roma', 'Paris']));