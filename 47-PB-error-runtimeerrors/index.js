'use strict';

console.log('1-)');
class Dog {
    constructor(name) {
        this.name = name;
    }
    bark() {
        console.log(`${this.name} says woof`);
    };
}

let fido = new Dog("fido");
fido.bark();

console.log('2-)');

const getMonthName = (x) => {
    var arr = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    x = x - 1;

    try {
        return x >= 1 && x <= 12 ? arr[x] : new Error('error seu burro');
    
    } catch (e) {
        
        return e;
    }
}
console.log(getMonthName(12));