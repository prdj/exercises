'use strict';

console.log('1-)');

function tree(x) {
    if (x < 3) {
        return " ";
    }
    let result = "";
    for (let i = 1; i <= x; i++) {
        for (let j = 1; j <= x; j++) {
            if (j <= x - i || j >= x + i) {
                result += "";
            } else {
                result += "* ";
            }
        }
        result += "\n";
    }
    return result;
}

console.log(tree(4));


console.log('2-)');

const print = () => {
    let arr = [
        [1, 2, 1, 24],
        [8, 11, 9, 4],
        [7, 0, 7, 27],
        [7, 4, 28, 14],
        [3, 10, 26, 7]
    ];
    let output = '';
    for (let i = 0; i < arr.length; i++) {
        output += 'row ' + [i] + '\n';
        for (let j = 0; j < arr[i].length; j++) {
            output += arr[i][j] + '\n';
        }
    }
    return output;
}
console.log(print());

console.log('3-)');

const program = () => {
    let output = '';
    let outputone = '';
    for (let i = 1; i <= 4; i++) {
        outputone += ' ' + [i] + ' ' + [i] + ' ' + [i];
        for (let j = 0; j <= i ; j++) {
            output += ' ' + [j];
        }
    }
    return outputone + '\n' + output;

}
console.log(program());