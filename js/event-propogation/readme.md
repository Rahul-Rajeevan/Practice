Event propagation refers to the way events propagate through the DOM hierarchy.
By understanding event propagation, you can control how events are handled at different levels of the DOM tree.
There are two phases of event propagation: capturing phase and bubbling phase.

const container = document.querySelector('#container');

container.addEventListener('click', () => {
  // Handle the click event on the container element
}, false);

container.addEventListener('click', () => {
  // Handle the click event on the container element (bubbling phase)
}, true);


const button = document.querySelector('#myButton');

button.addEventListener('click', (event) => {
  console.log(event.target); // Output: <button id="myButton">Click Me</button>
  console.log(event.type); // Output: "click"
});
