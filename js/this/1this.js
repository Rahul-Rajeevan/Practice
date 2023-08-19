// window
// document.getElementById("btn").addEventListener('click',()=>{
// console.log(this)
// })



// button
// document.getElementById("btn").addEventListener('click',function(){
// console.log(this)
// })


// Passing args
// button.addEventListener('click', function() {
//     // Call the actual callback function and pass arguments
//     lidToggle(newArg);
//   });
  

// const person={
//     name:"Rahul",
//     age:20,
//     greet:function(){
//         console.log("hi",this.name)
//     }
// }

// setTimeout(() => {
//     person.greet()
// }, 1000);

// ----------------------------------------------------------------------------------------
// Define an object representing a person
const person = {
    name: "Alice",
    greet: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
  
  // Call the "greet" method of the "person" object
  person.greet(); // Output: "Hello, my name is Alice."
  
  // Create a separate function that calls the "greet" method
  function callGreet() {
    const name = "Bob";
    person.greet(); // Output: "Hello, my name is Alice."
  }
  
  callGreet();
  