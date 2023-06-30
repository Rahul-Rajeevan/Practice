// Callbacks:

// Callbacks are functions that are passed as arguments to other functions and 
// are executed asynchronously.
// They are commonly used to handle asynchronous operations in JavaScript.
// When an asynchronous operation completes, the callback function is invoked, 
// allowing you to handle the result or perform further actions.

function greet(name, callback) {
    setTimeout(() => {
      const message = `Hello, ${name}!`;
      callback(message);
    }, 2000);
  }
  
  function displayMessage(message) {
    console.log(message);
  }
  
  greet('John', displayMessage); // Output: Hello, John! (after 2 seconds)
  