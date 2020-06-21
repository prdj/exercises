'use strict';


console.log('1-)');
let findGreatest = function ([...a], b) {
    let getGreatest = a.map(a => {
        if (a > b) {
            return a;
        }
        if (b * 0.2 > a) {
            return `${b} is greater`;
        }
    });
    return getGreatest.join(' ');
}
console.log(findGreatest([10, 20, 30, 22, 44, 55], 99));


console.log('2-)');

function longestWord(s) {
    let myArr = s.split(' ');
    /*    return myArr.map(w => w.length); */
    let word = '';
    for (let i = 0; i < myArr.length; i++) {
        if (word.length < myArr[i].length) {
            word = myArr[i];
        }
    }
    return word;
}

console.log(longestWord('this is a web development course'));

console.log('3-)');

function reverse(n) {
    let number = n.toString().split('').reverse().join('');
    return number;
}

console.log(reverse(46579));

console.log('4-)');

const findVowels = (s) => {
    let vowels = 0;
    let myArr = ['a', 'e', 'i', 'o', 'u'];
    s = s.split('');
    for (let i = 0; i <= s.length; i++) {
        if (myArr.includes(s[i])) {
            vowels += 1;
        }

    }
    return vowels;
}

console.log(findVowels("this is aieieie string"));

console.log('5-)');

const missingNums = (x) => {

    let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let result = myArr.filter(s => !x.includes(s));
    return result
}


console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));

console.log('6-)');

const sumOfCubes = (x) => {
    let result = 0;
    let myArr = x.map(s => s = s ** 3);
    for (let i = 0; i < myArr.length; i++) {
        result += myArr[i];
    }
    return result;
}
console.log(sumOfCubes([1, 5, 9]));

console.log('7-)');

const dictionary = (x, arr) => {
    return arr.filter(el => el.toLowerCase().indexOf(x) !== -1);
}

console.log(dictionary("bu", ["button", "breakfast", "border"]));
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]));
console.log(dictionary('beau', ['pastry', 'delicious', 'name', 'boring']));

console.log('8-)');

const evenNums = (x) => {
    let sum = [];
    for (let i = 2; i <= x; i += 2) {
        sum.push(i);
    }
    return sum;
}
console.log(evenNums(8));
console.log(evenNums(4));
console.log(evenNums(0));

console.log('Bonus-)');

const alphaOrder = (x) => {
    x = x.split('');
    return x.sort().join('');

}

console.log(alphaOrder("webdev"));