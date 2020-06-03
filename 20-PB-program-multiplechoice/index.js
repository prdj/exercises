'use strict';
console.log('1.')
let color = null;

switch (color) {
    case 'red':
        console.log('Tomatos are red.');
        break;
    case 'blue':
        console.log('Tomatos are blue.');
        break;
    case 'green':
        console.log('Tomatos are green.');
        break;
    case 'yellow':
        console.log('Tomatos are yellow.');
        break;
    default:
        console.log('blue berries');
}

console.log('2.')
let grade = 7;

switch (grade) {
    case (grade <= 2 ? grade : null):
        console.log('So bad.');
        break;
    case (grade > 2 && grade <= 4 ? grade : null):
        console.log('Not so bad.');
        break;
    case (grade > 4 && grade <= 6 ? grade : null):
        console.log('Super good.');
        break;
    default:
        console.log('Invalid number.');
}

console.log('3.')

let fruit = null;

switch (fruit) {
    case 'banana':
        console.log('Potassium.');
        break;
    case 'orange':
        console.log('For my juice.');
        break;
    case 'strawberry':
        console.log('For my cake.');
        break;
    case 'apple':
        console.log('For my pie.');
        break;
    default:
        console.log('Not my type of fruit.');
}

console.log('4.')


let percenTage = 0;

switch (percenTage) {
    case (percenTage <= 30 && percenTage != 0 ? percenTage : null):
        console.log('Still a long way to go');
        break;
    case (percenTage > 30 && percenTage <= 50 ? percenTage : null):
        console.log('Slowly getting there');
        break;
    case (percenTage >= 51 && percenTage <= 80 ? percenTage : null):
        console.log('You can do it!');
        break;
    case (percenTage >= 81 && percenTage <= 99 ? percenTage : null):
        console.log('This is the last push!');
        break;
    case (percenTage === 100 ? percenTage : null):
        console.log('You\'re there. Well done!');
        break;

    default:
        console.log('Invalid number.');
}

console.log('5.')
// Switch statements are great for fixed data values and you can have multiple if statement for multiple choice of statements.