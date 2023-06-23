// Custom Error Types

// In this example, we'll create a custom error type called InvalidInputError 
// to handle validation errors when processing user input.

class InvalidInputError extends Error {
    constructor(message) {
      super(message);
      this.name = 'RahulError';
    }
  }
  
  function validateInput(input) {
    if (!input) {
      throw new InvalidInputError('Input cannot be empty');
    }
  
    if (typeof input !== 'string') {
      throw new InvalidInputError('Input must be a string');
    }
  
    if (input.length < 5) {
      throw new InvalidInputError('Input length must be at least 5 characters');
    }
  
    // Perform further validation or processing
  }

  validateInput("")