'use strict';

console.log('1-)');

const isFourLetters = (myArr) => {
    let result = [];
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i].length === 4) {
            result.push(myArr[i]);
        }
    }
    return result;
}

console.log(isFourLetters(["Tomato", "Corn", "Lettuce"]));

console.log('2-)');

const monthName = (x) => {
    let result = '';
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (x <= 0 || x > 12) {
        result = 'wrong';
    } else {
        result = months[x - 1];
    }
    return result;
}
console.log(monthName(0));


console.log('5-)');

const wordRank = (x) => {
    let splitString = x.split(', ');
    let result = '';
    for (let i = 0; i < splitString.length; i++){
        
    }
    

    return splitString;
}

console.log(wordRank('The quick brown fox.'));
console.log(wordRank("Nancy is very pretty."))
console.log(wordRank("Check back tomorrow, man!"))