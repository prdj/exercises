'use strict';
/* 
let space = "";
for (let i = 10; i >= 1; i--) {
    space = "";
    for (let j = i; j < 10; j++) {
        space += " ";
    }
    for (let k = 0; k < (i * 2) - 1; k++) {
        space += "*";
    }
    console.log(space);
} */

// You only need to change two things ate the first for.
console.log('2.')

for (let i = 1; i <= 10; i++) {
    let space = "";
    for (let j = i; j < 10; j++) {
        space += "   ";
    }
    for (let k = 10; k < (i * 2) - 1; k++) {
        space = space + " * ";
        }
    console.log(space);
}