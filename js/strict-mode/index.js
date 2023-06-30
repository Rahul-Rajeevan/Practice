'use strict';

// In strict mode, you can't use undeclared variables
x = 10; // This will throw an error in strict mode

// Functions in strict mode have their own scope
function myFunction() {
  'use strict';
  y = 20; // This will throw an error in strict mode
}

// Octal syntax is not allowed in strict mode
var octalNumber = 0123; // This will throw an error in strict mode

// Deleting variables or functions is not allowed in strict mode
var a = 5;
delete a; // This will throw an error in strict mode

console.log("Strict mode example");
