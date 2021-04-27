class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello() {
        console.log(`Hello my name is ${this.name}  and i'am ${this.age}`);
    }
}

//module.exports = Person;

//Object manip
//const Person = require('./person');
const p1 = new Person("Steve", 24);
p1.hello();