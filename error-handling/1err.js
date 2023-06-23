function divideNumbers(numerator, denominator) {
    if (denominator === 0) {
      throw new Error("Division by zero is not allowed.");
    }
  
    return numerator / denominator;
  }

  
//   To handle the error and display a custom error message, you can use a 
//   try...catch block when calling the "divideNumbers" function:

try {
    let result = divideNumbers(10, 0);
    console.log("Result:", result);
  } catch (error) {
    console.error("Error:", error.message);
  }
  