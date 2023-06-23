// Constructor Functions:

function Person(name, age) {
    this.name = name;
    this.age = age;
  }

//   Creating Objects with Constructors:

const person = new Person('John Doe', 25);

// Prototypes and Prototype Chain:
// Each JavaScript object has a prototype, which is an object from which it 
// inherits properties and methods.
// The prototype of an object can be accessed using the prototype property.
// Objects created with the same constructor share the same prototype object.
// The prototype chain is a mechanism that allows objects to inherit properties and methods from their prototypes.
// Here's an example of adding a method to the prototype of the Person constructor:

Person.prototype.greet = function() {
    console.log('Hello!');
  };

  
// Inheritance with Prototypes:

// Prototypes enable inheritance in JavaScript by allowing objects to inherit 
// properties and methods from other objects.
// The Object.create() method can be used to create a new object with a specified 
// prototype.
// Here's an example of creating a Student object that inherits from Person:

function Student(name, age, school) {
    Person.call(this, name, age);
    this.school = school;
  }
  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;
  