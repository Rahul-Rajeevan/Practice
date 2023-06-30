AJAX (Asynchronous JavaScript and XML) is a technique that allows you to make asynchronous HTTP requests from JavaScript without reloading the entire web page. It enables you to retrieve data from a server and update parts of the web page dynamically.

In modern JavaScript, the Fetch API is commonly used for making AJAX requests. It provides a powerful and flexible way to interact with server resources and handle the responses.

fetch('https://api.example.com/data', {
  method: 'POST',
  body: JSON.stringify({ key: 'value' }),
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => {
    // Handle the response
  })
  .catch((error) => {
    // Handle any errors
  });
