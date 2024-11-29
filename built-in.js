/*

// String Function

const str = "Hello World";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.includes("World"));
console.log(str.indexOf("World"));
console.log(str.slice(0,8));

*/

/*

//Number Function

const num=123.456;
console.log(Number.isInteger(num));
console.log(num.toFixed(2));
console.log(parseInt("123px"));
console.log(parseFloat("123.45px"));

*/


/*

// Array Function

const arr = [1,2,3,4,5,6];
console.log(arr.length);
console.log(arr.includes(3));
console.log(arr.push(7));
console.log(arr.length);
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.shift());
console.log(arr.unshift(0));
console.log(arr);
console.log(arr.map(x=>x*3));
console.log(arr.filter(x=>x>3));
console.log(arr.reduce((a,b) => a+b ,0));

*/


/*

// Math Function

console.log(Math.max(1, 5, 10));    
console.log(Math.min(1, 5, 10));        
console.log(Math.round(4.7));          
console.log(Math.floor(4.7));          
console.log(Math.ceil(4.2));            
console.log(Math.random());             
console.log(Math.sqrt(16));             


*/


/*

// Date Function

const now = new Date();
console.log(now.toDateString());      
console.log(now.toTimeString());       
console.log(now.getFullYear());         
console.log(now.getMonth());            
console.log(now.getDate());             
console.log(now.getHours());            
console.log(now.getMinutes());          
console.log(now.getSeconds());  

*/


/*

// JSON Function
const obj = { name: "Tom" , age : "25"};
const jsonString = JSON.stringify(obj);
console.log(jsonString);
console.log(JSON.parse(jsonString));

*/



// Global Functions

console.log(isNaN("Hello"));            // Checks if value is NaN: true
console.log(isFinite(10 / 0));          // Checks if value is finite: false
console.log(eval("2 + 2"));             // Evaluates a string as code: 4
console.log(encodeURIComponent("Hello World!")); // Encodes a URI component
console.log(decodeURIComponent("Hello%20World%21")); // Decodes a URI component

