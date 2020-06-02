'use strict';

let trY = 0;
if (trY % 3 === 0 && trY % 5 === 0){
    console.log('FizzBuzz');
}  else if (trY % 3 === 0) {
    console.log('Fizz');
}  else if (trY % 5 === 0) {
    console.log('Buzz');
} else {
    console.log(trY);
}