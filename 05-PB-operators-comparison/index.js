'use strict';

let x = 20;
let y = 30;
let z = 5;
console.log('1. Check whether x and y are equal.');
console.log(x===y);

console.log('2. Check whether x and y are *not* equal.');
console.log(x!==y);

console.log('3. Check whether x is greater than y.');
console.log(x>y);

console.log('4. Check whether x is less than or equal to y.');
console.log(y<=y);

console.log('5. Check whether y is greater than x.');
console.log(y>x);

console.log('6. ');
console.log((z*x)>(z+y));

console.log('7. Subtract z from x and check whether this result is less than y divided by z.');
console.log((z-x)<(y/z));

console.log('8. Check whether z, x and y are equal.');
console.log(x===y===z);

console.log('9. Check whether the remainder of x divided by z and the remainder of y divided by z are equal.');
console.log('The remainder of x divided by z is: ' + x % z + '.');
console.log('The remainder of y divided by z is: ' + y % z + '.');

console.log('10.');
console.log((z+x)>=(y-z));

