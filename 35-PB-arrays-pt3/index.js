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
    var months = ['!month', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    for (let i = 0; i <= months.length; i++) {
        if (i === x) {
            result += months[i];
        }
        if (x === undefined) {
            result += 'not';
        }
    }
    return result;

}
console.log(monthName(13));