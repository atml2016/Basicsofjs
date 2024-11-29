/*
function greet(name){
    console.log(`Hello ${name}`);
}
greet("Tom");

*/


/*
function greet(name = "Bob"){
    console.log(`Hello ${name}`);
}
greet("Tom");
greet();

*/


/*
// Rest Parameters
function sum(...numbers){
    return numbers.reduce((total,num) => total+num,0);
}

console.log(sum(1,2,3,4));
*/


/*
// Object Destructing Parameter

function display({name,age}){
    console.log(`${name} , ${age}`);

}

display({name:"Tom" , age: 25});

*/

// Arrow Function Parameters

const multiply = (a,b=1) => {
    return(
    a*b
);
}

console.log(multiply(10,2));
console.log(multiply(10));



