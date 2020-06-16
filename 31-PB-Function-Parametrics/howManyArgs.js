// Create a function howManyArgs which returns the total amount of arguments passed to it.
// Example: passing 3 arguments when calling the function should return the number 3, passing 15 arguments should return the umber 15

const howManyArgs = (...args) => {
    let sum = 0;
    for (i = 0; i <= args.length; i++) {
        sum = i;
    }
    return sum;
};

console.log(howManyArgs()); // -> 0
console.log(howManyArgs(1, false, "hello")); // -> 3
console.log(howManyArgs('better')); // -> 1