// Define a constructor function "Animal" that takes a "name" parameter
function Animal(name) {
    this.name = name;
  }
  
//   Animal.prototype.place="dsdsd";

  // Add a method "sayName" to the prototype of the "Animal" constructor
  Animal.prototype.sayName = function() {
    console.log(`My name is ${this.name}.`);
  };
  
  // Define a constructor function "Dog" that takes "name" and "breed" parameters
  function Dog(name, breed) {
    // Call the "Animal" constructor with "this" and "name" to set the name property
    Animal.call(this, name);
    this.breed = breed;
  }
  
  // Set the prototype of "Dog" to a new object created from "Animal.prototype", inherits all the methods from Animal
  Dog.prototype = Object.create(Animal.prototype);
  
  // Create a new instance of "Dog" named "myDog" with name "Buddy" and breed "Labrador"
  const myDog = new Dog("Buddy", "Labrador");
  
  console.log(myDog)

  // Call the "sayName" method on the "myDog" instance
  myDog.sayName(); // Output: "My name is Buddy."
  