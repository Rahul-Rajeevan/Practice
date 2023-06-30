The Document Object Model (DOM) is a programming interface for web documents. It represents the HTML elements of a web page as a structured tree, allowing you to manipulate and interact with the elements dynamically using JavaScript.

You can access DOM elements using methods such as getElementById, getElementsByClassName, getElementsByTagName, or querySelector.

const element = document.getElementById('myElement');
element.textContent = 'New text'; // Update text content
element.innerHTML = '<strong>Updated HTML</strong>'; // Update HTML content
element.setAttribute('data-id', '123'); // Update attribute
element.classList.add('highlight'); // Add CSS class
element.style.backgroundColor = 'red'; // Change background color

const newElement = document.createElement('div'); // Create new element
newElement.textContent = 'New element'; // Set content
const parentElement = document.getElementById('parentElement');
parentElement.appendChild(newElement); // Append new element to parent


const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  // Handle button click event
});
