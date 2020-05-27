'use strick';

console.log('1.')

let exOne = 99;
let exOneb = 90;

if ((50 >=  exOne <= 99) && (50 >= exOneb <= 99)) {
console.log(true);
} else {
    console.log(false);
}

console.log('2.')
if ((exOne <= 50 && exOne <= 99) || (exOneb >= 50 && exOneb <= 99)) {
    console.log(true);
    } else {
        console.log(false);
    }

console.log('3.')
let a = 100;
let b = 170;
let c = 21;

if (a>b && a>c) {
    console.log('a');  
} else if (b>a && b>c) {
    console.log('b');
} else {
    console.log('c');
}

console.log('4.')
let newStr = 'Pythonn';
if (newStr === null || newStr === undefined || newStr.substring(0, 2)=== 'Py')
{
    console.log(newStr);
} else  {
    console.log(`Py${newStr}`);
}

console.log('5.')
let integerOne = 23;
let integerTwo = 55;
if (integerOne + integerTwo >= 50 && integerOne + integerTwo <= 80)
{
    console.log('65');
} else {
    console.log(80);
}

console.log('6.')
let numberOne = 12;
let numberTwo = 4;
if (numberOne + numberTwo === 8 || numberOne - numberTwo === 8)
{
    console.log(true);
} else {
    console.log(false);
}

console.log('7.')
let exSevenOne = 7;
let exSevenTwo = 8;
if ( exSevenOne === 15 || exSevenTwo === 15 || (exSevenOne + exSevenTwo === 15))
{
    console.log(true);
} else {
    console.log(false);
}

console.log('8.')
let exEightOne = 8;
let exEightTwo = 10;
if ( exEightOne % 7 === 0 && exEightTwo % 7 === 0 || exEightOne % 11 === 0 && exEightTwo % 11 === 0 )
{
    console.log(true);
} else {
    console.log(false);
}

console.log('9.')
let exNineOne = 10;
let exNineTwo = 10;
let suma = exNineOne + exNineTwo;
if (exNineOne === exNineTwo)
{
    console.log(3 * suma);
} else {
    console.log('Values are not the same.')
}

console.log('10.')
let espeCified = 29;
let diFer = espeCified - 19 ;
if (espeCified > 19)
{
    console.log(2 * diFer)
} else {
    console.log('Not greater than 19.')
}

console.log('11.')
let firstName = 'Pedro';
let age = 30;
if ( age < 13)
{
    console.log(`${firstName} is a child.`)
} else if ( age >= 20 && age < 30) {
    console.log(`${firstName} is a young adult.`)
} else {
    console.log(`${firstName} is a adult.`)
}
