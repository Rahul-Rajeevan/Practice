// Define a constructor function "Animal" that takes "name" and "place" parameters
function Animal(name, place) {
    this.name = name;
    this.place = place;
  }
  
  // Add a method "sayName" to the prototype of the "Animal" constructor
  Animal.prototype.sayName = function() {
    console.log(`My name is ${this.name} and I'm at ${this.place}.`);
  };
  
  // Define a constructor function "Dog" that takes "name", "breed", and "place" parameters
  function Dog(name, breed, place) {
    // Call the "Animal" constructor with "this", "name", and "place" to set properties
    Animal.apply(this, [name, place]);
    this.breed = breed;
  }
  
  // Set the prototype of "Dog" to a new object created from "Animal.prototype", inherits all the methods from Animal
  Dog.prototype = Object.create(Animal.prototype);
  
  // Create a new instance of "Dog" named "myDog" with name "Buddy", breed "Labrador", and place "Park"
  const myDog = new Dog("Buddy", "Labrador", "Park");
  
  console.log(myDog);
  
  // Call the "sayName" method on the "myDog" instance
  myDog.sayName(); // Output: "My name is Buddy and I'm at Park."
  