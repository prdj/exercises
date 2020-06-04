'use strict';

console.log('1.)')
let sum = 0;
for (let i = 1; i <= 20; i++) {
    sum = sum + i;
    console.log(i);

}
console.log(sum);


console.log('2.)')

for (let bottles = 1; bottles <= 5; bottles++) {

    switch (bottles) {
        case 1:
            console.log('There is one bottle of beer on the wall.');
            break;
        case 2:
            console.log('There is two bottles of beer on the wall.');
            break;
        case 3:
            console.log('There is three bottles of beer on the wall.');
            break;
        case 4:
            console.log('There is four bottles of beer on the wall.');
            break;
        case 5:
            console.log('There is five bottles of beer on the wall.');
    }
}

console.log('3.)')

for (let iterate = 0; iterate <= 20; iterate++) {
    if (iterate % 2 === 0) {
        console.log(`${iterate} is even.`);
    } else {
        console.log(`${iterate} is odd.`);
    }

}

console.log('4.)')

for (let ex4 = 0; ex4 <= 10; ex4++) {
    console.log(ex4);
    for (let ex4b = 1; ex4b <= 10; ex4b++) {
        console.log(`${ex4} x ${ex4b} = ${ex4*ex4b}`);
    }
}


console.log('5.)')
for (let index = 1; index <= 100; index++) {
    /* console.log(index); */
    if (index % 3 === 0 && index % 5 === 0) {
        console.log(`${index} FizzBuzz`);
    } else if (index % 3 === 0) {
        console.log(`${index} Fizz`);
    } else if (index % 5 === 0) {
        console.log(`${index} Buzz`);
    } else {
        console.log(`${index} Not my number.`);
    }
}

console.log('6.)')
let soma = 0;
for (let eX6 = 0; eX6 <= 1000; eX6++) {
    if (eX6 % 3 === 0 || eX6 % 5 === 0) {
        soma += eX6;
    }
}
console.log(soma);


let printResult = '';
console.log('7.)')
for (let i = 1; i <= 10; i++) {
    printResult = printResult + ' ' + i * 100;
}
console.log(printResult);

let printResult2 = '';
for (let i = 1; i <= 128; i = i * 2) {
    printResult2 = printResult2 + ' ' + i;
}
console.log(printResult2);

let printResult3 = '';
for (let i = 0; i <= 5; i++) {
    printResult3 = printResult3 + ' ' + i * 2;
}
console.log(printResult3);

let printResult4 = '';
for (let i = 3; i <= 15; i++) {
    if (i % 3 === 0) {
        printResult4 = printResult4 + ' ' + i;
    }
}
console.log(printResult4);

let printResult5 = '';
for (let i = 9; i >= 0; i--) {
    printResult5 = printResult5 + ' ' + i;
}
console.log(printResult5);

let printResult6 = '';
for (let i = 1; i <= 4; i++) {
    printResult6 = printResult6 + ' ' + `${i} ${i} ${i}`;
    /*  console.log(`${i}\n${i}\n${i}`); */
}
console.log(printResult6);

let printResult7 = '';
for (let i = 0; i <= 4; i++) {
    printResult7 = printResult7 + ' ' + i;
}
console.log(`${printResult7}${printResult7}${printResult7}`);

console.log('8.')
let str = 'anna';
let isPalindrome = str.split('').reverse().join('');

if (isPalindrome === str) {
    console.log(true);
} else {
    console.log(false);
}


/* let space = "";
for(let i=1; i <= 10; i++){
  space = "";
  for(let j=i; j < 10; j++){
    space += " ";
  }
  for(let k=0; k < (i*2)-1; k++){
    space += "*";
  }
  console.log(space);
}   */

let space = "";
for(let i=10; i >= 1; i--){
  space = "";
  for(let j=i; j < 10; j++){
    space += " ";
  }
  for(let k=0; k < (i*2)-1; k++){
    space += "*";
  }
  console.log(space);
}  