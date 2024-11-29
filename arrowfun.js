/*
const num=[1,2,3,4];
const squares= num.map(num => num*num);
console.log(squares);
*/

function Person(name) {
    this.name = name;
    this.sayName =()=>{
        console.log(`My name is ${this.name}`);
    }
}

const person = new Person("Tom");
person.sayName();

