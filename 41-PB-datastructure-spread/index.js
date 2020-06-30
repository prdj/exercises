'use strict';

console.log('1-)');

let euroCountries = ['Germany', 'Italy', 'Holand', 'Spain'];
let asianCountries = ['Japan', 'China', 'India', 'South korea'];

let anotherVariable = euroCountries.concat(asianCountries);

console.log(anotherVariable);


console.log('2-)');

let arr = ['a', 'b', 'c'];
let arr2 = [...arr];

console.log(arr2);


console.log('3-)');

let arrNun = [1, 4, 7, 9, 44];
let max = Math.max(...arrNun);

console.log(max);

console.log('4-)');

/* let arrNun1 = [1, 4, 7, 9, 44];
let min = Math.min(...arrNun1);
console.log(min); */

function getMinArray(arrNun1) {
    return Math.min.apply(null, arrNun1);
}
console.log(getMinArray([1, 4, 7, 9, 44]));

console.log('5-)');

