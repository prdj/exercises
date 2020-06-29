'use strict';

console.log('1-)');
const person = {
    age: 18,
    name: 'Joao',
    job: 'Barman'
};

for (const myKey in person) {
    console.log(myKey + ': ' + person[myKey]);
}


console.log('2-)');

const getObjectValues = {
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
};

const array = Object.values(getObjectValues);
console.log(array);


console.log('3-)');

let myPerson = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: 'Paris'
};

myPerson.printer = function () {
    return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} in ${this.city}`;;
}
console.log(myPerson.printer());
