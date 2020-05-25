'use strick';

console.log('1.')
console.log(3 === '3');
//Converts the operands to the same type before making the comparison.
// Yes, there is a difference between them. To serve different types of operands.
/* console.log(3 = '3');
              ^ */
// ReferenceError: Invalid left-hand side in assignment. On equal sinal can only be used to define Varibles.


console.log('2.')
let exTwo = true;
console.log(!exTwo);

console.log('3.')
let firstName, givenName;

firstName = 'Stacey';
let name = givenName || firstName || 'John'; 

console.log(name);

// Stacey. The Var givenName is not defined. So firstName will be the next in the order of OR to be applied.


