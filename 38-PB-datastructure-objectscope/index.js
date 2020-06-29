'use strict';

console.log('1-)');

const student = {
    firstName: "John",
    lastName: "Smith",
    class: 12,
    printer: function () {
        console.log(`${this.firstName} ${this.lastName} is a student in class ${this.class}.`)
    }
};

student.printer();



console.log('2-)');

const personInfo = {
    firstName: 'Pedro',
    lastName: 'Dantas',
    age: 33,
    job: 'no job',
    city: 'Berlin',
    printer: function () {
        console.log(`${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} living in ${this.city}.`)
    }
};

personInfo.printer();


console.log('3-)');

let objLength = Object.keys(personInfo).length;
console.log(objLength);