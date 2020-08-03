'use strict';

console.log('1-)');

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        return `${this.name}, ${this.age} years old.`
    }
}

const pedro = new Person('Pedro', 33);
console.log(pedro);
console.log(pedro.describe());



console.log('2-)');

class cylinder {
    constructor(height, radius) {
        this.height = height;
        this.radius = radius;
    }
    calc() {
        return Math.PI * this.radius * this.radius * this.height;
    }
    describe() {
        return `height:${this.height}, radius:${this.radius}`
    }
}

const myCylinder = new cylinder(20, 15);
/* console.log(myCylinder); */
console.log(myCylinder.describe());
console.log(myCylinder.calc().toFixed(4));



console.log('4-)');

class TV {

    TVchannel (NBA, CNN, DiscoveryChannel, SportsTv, NationalGeographic)
    constructor(brand, channel, volume) {
        this.brand = brand;
        this.channel = channel;
        this.volume = volume;
    }

}