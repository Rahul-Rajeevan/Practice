function debounce(callback, delay) {
    let timeoutId;
  
    return function() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(callback, delay);
    };
  }
  
  const button = document.querySelector('#myButton');
  const debounceClick = debounce(function() {
    console.log('Button clicked!');
  }, 200);
  
  button.addEventListener('click', debounceClick);

  
//   In this example, the debounce function takes a callback function and a delay as parameters. It returns a new function that wraps the callback and implements the debouncing logic using a setTimeout. When the returned function is invoked, it clears any previously set timeout and sets a new one to execute the callback after the specified delay.

// By wrapping the callback function in a closure, the debounce function retains access to the timeoutId variable even after it's returned. This ensures that each time the debounced function is invoked, it refers to the same timeoutId and can cancel any pending timeout from previous invocations, effectively debouncing the events.

// In the example, when the button is clicked, the debounceClick function is called. If the button is clicked multiple times within 200 milliseconds, the callback will only be executed once, after the delay has passed. This prevents multiple rapid executions of the action associated with the button click, providing a smoother and more controlled user experience.