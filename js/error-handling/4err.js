// Error Handling with try...catch and finally

function performTask() {
    try {
      // Code that might throw an error
      const result = "bnm" / 0;
      console.log('Result:', result);
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      console.log('Cleanup: Closing resources');
    }
  }
  
  performTask()