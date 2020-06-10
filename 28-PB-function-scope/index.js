'use strict';

console.log('1-)');

const exOne = (x, y) => {
    console.log(typeof x);
    console.log(typeof y);
    let result = '';
    for (let i = 1; i <= y; i++) {
        result = result + ' ' + x ** i;
        console.log(x ** i);
        console.log(result);

    }
}
exOne(2, 5);


console.log('2-)');
let myFruit = 'avocado';
const printFavoriteFruit = (fruit) => {
    fruit = 'banana';
    console.log('My favorite fruit is:', fruit);
}
printFavoriteFruit(myFruit);


console.log('3-)');

const exponent = (a, b) => {
    const result = a ** b;
    console.log(result);
}
exponent(2, 6);