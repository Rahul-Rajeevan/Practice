const delay = (ms) => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });
  };

//   Once a promise is created, you can use the then() method to handle the resolved value.

delay(2000).then(() => {
    console.log("Promise resolved after 2 seconds");
  });


//   Chaining Promises:

//   Promises can be chained together using the then() method, allowing you to 
//   perform a sequence of asynchronous operations.
//   Each then() method call returns a new promise, enabling you to chain 
//   multiple asynchronous operations together.

delay(2000)
  .then(() => {
    console.log("First promise resolved after 2 seconds");
    return delay(1000);
  })
  .then(() => {
    console.log("Second promise resolved after 1 second");
  });



  