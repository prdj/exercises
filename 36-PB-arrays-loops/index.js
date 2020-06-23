'use strict';

console.log('1-)');

const sumOfNumber = () => {
    let myArr = [];
    let sum = 0;
    for (let i = 1; i < 10; i++) {
        myArr.push(i);
        sum = myArr.reduce((a, b) => a + b);
    }
    return `Arr:${myArr} Sum Of Arr: ${sum}`;
}
console.log(sumOfNumber());

console.log('2-)');

const helloFriends = () => {
    let myArr = ['pedro', 'joao', 'maria', 'joana', 'jose', 'joaquim', 'jumira'];
    let msg = '';
    for (let i = 0; i < myArr.length; i++){
         msg = myArr[i] + ' is at index ' + [i] + ' of my friends array.';
    }    
    return msg;
}

console.log(helloFriends());
