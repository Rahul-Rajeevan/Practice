// Suppose you have a function called getData that fetches data from an API 
// asynchronously using a callback function. However, there may be cases where 
// the API request fails, and you want to handle those errors appropriately.

function getData(callback) {
    // Simulating an asynchronous API request
    setTimeout(() => {
      const random = Math.random();
  
      if (random < 0.5) {
        // API request successful
        const data = { id: 1, name: "John Doe" };
        callback(null, data);
      } else {
        // API request failed
        const error = new Error("Failed to fetch data from API");
        callback(error, null);
      }
    }, 2000);
  }
  
  // Usage
  getData((error, data) => {
    if (error) {
      console.error("Error:", error.message);
      // Handle the error case
    } else {
      console.log("Data:", data);
      // Process the data
    }
  });
  