'use strict';

console.log('1.')

for (let i = 1 ; i <= 20; i++){
    console.log(i);
}

console.log('2.')

for ( let botTles = 0; botTles <= 5; botTles++){
    console.log(`There are two bottles of beer on the wall: ${botTles}`);
}

console.log('3.')

for (let iteRate = 0; iteRate <= 20; iteRate++){
    console.log(iteRate);
    if (iteRate % 2 === 0){
        console.log(`${iteRate} is even.`)
    }
}

console.log('4.')

for (let ex4 = 0; ex4 <= 10; ex4++){
    console.log(ex4);
    for (let ex4b = 0; ex4b <= 10; ex4b++){
        console.log(ex4b*9);
    }
}

console.log('5.')
for ( let index = 1; index <=100; index++ ){
    /* console.log(index); */
    if ( index % 3 === 0 && index % 5 === 0){
        console.log(`${index} FizzBuzz`);
    } else if ( index % 3 === 0){
        console.log(`${index} Fizz`); 
    } else if (index % 5 === 0){
        console.log(`${index} Buzz`)
    } else {
        console.log(`${index} Not my number.`)
    }
}

console.log('6.')

for ( let eX6 = 0; eX6 <=1000; eX6++){
    if ( eX6 % 3 === 0 || eX6 % 5 === 0){
        console.log(eX6);
    }
}

console.log('7.')
