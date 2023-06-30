var a=10;
console.log(a)

a=20
console.log(a)

{
    a=30
}
console.log(a)


// JavaScript is a weakly typed language, which means you don't need to declare the 
// data type of a variable explicitly. JavaScript can automatically identify the data 
// type based on the value assigned to the variable. 

let name = "John";                   // string
let age = 30;                        // number (integer)
let height = 1.75;                    // number (floating point)
let isStudent = true;                 // boolean
let address = null;                   // null
let job;                              // undefined (automatically assigned)

let person = {                        // object
  name: "Jane",
  age: 25,
  profession: "Engineer"
};

let hobbies = ["reading", "traveling", "painting"];  // array

console.log(typeof name);             // Output: string
console.log(typeof age);              // Output: number
console.log(typeof height);           // Output: number
console.log(typeof isStudent);        // Output: boolean
console.log(typeof address);          // Output: object (typeof null is "object")
console.log(typeof job);              // Output: undefined
console.log(typeof person);           // Output: object
console.log(typeof hobbies);          // Output: object (typeof array is "object")
