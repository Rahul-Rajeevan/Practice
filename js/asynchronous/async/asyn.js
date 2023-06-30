// Async/Await:

// Async/await is a syntax sugar built on top of promises that provides a more concise and readable way to write asynchronous code.
// The async keyword is used to define an asynchronous function, which internally returns a promise.
// The await keyword is used to pause the execution of an async function until a promise is resolved.


async function fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  
  fetchData('https://api.example.com/data')
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
  