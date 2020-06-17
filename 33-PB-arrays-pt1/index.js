'use strict';

let euroCities = ['Paris', 'London', 'Valletta', 'Prague', 'Rome'];
console.log(euroCities);

let anotherVariable = euroCities[1];
console.log(anotherVariable);

euroCities.unshift('Berlin');
console.log(euroCities);
console.log(euroCities.length);

euroCities.pop();
console.log(euroCities);

euroCities.push('Budapest');
console.log(euroCities);

euroCities.splice(1, 2);
console.log(euroCities);

let asianCities = ['Delhi', 'Tehran', 'Riyadh', 'Moscow', 'Benjing'];
console.log(asianCities);

let storeSomewhere = asianCities.slice(1, 4);
console.log(storeSomewhere);

let worldCities = euroCities.concat(asianCities);
console.log(worldCities);

worldCities.reverse();
console.log(worldCities);

worldCities[2] = 'Toronto';
console.log(worldCities);

worldCities.splice(1, 0, "Washington");
console.log(worldCities);

console.log(worldCities.join(''));
console.log(worldCities.join('+'));

let strHello = 'Hello World';
let reverse = strHello.split('').reverse().join('');
console.log(reverse);


let mySiblings = ['Pedro','Joao','Jorge'];
let parents = ['mae', 'pai'];

let concatArrays = mySiblings.concat(parents);
concatArrays.push('pingo', 'fino');
console.log(concatArrays);

concatArrays.reverse();
console.log(concatArrays);

console.log(concatArrays.indexOf('pai'));
concatArrays[2]= 'Paizao';
console.log(concatArrays);

