'use strict';

console.log('1-)');

let fruit, vegetables, food;

[fruit, vegetables, ...food] = ["banana", "cucumber", "bread", "cakes", "pizza"];

console.log(food);
console.log(vegetables);
console.log(fruit);

console.log('2-)');

const halloween = {
    pedro: 'mymmy',
    sofia: 'witch',
    joao: 'mosntro'
};

let pedro, sofia, joao;
({
    pedro,
    sofia,
    joao
} = halloween);

console.log(pedro);
console.log(sofia);
console.log(joao);

console.log('3-)');

const bands = {
    artist1: ['Regina Spektor','American-Russian','singer/songwriter', 'pianist', 'indie-pop', '"Us"']
}

let artist1;
({
    artist1
} = bands);

console.log(artist1);
console.log(artist1[0]+ ' is a '+ artist1[1] + ' ' + artist1[2] + ' and ' + artist1[3]+ '.The musician sings ' + artist1[4] + ' and their greatest hit is ' + artist1[5] + '.')