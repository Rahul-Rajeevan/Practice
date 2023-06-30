// Local Storage
localStorage.setItem('username', 'JohnDoe');
const username = localStorage.getItem('username');

// Cookies
document.cookie = 'username=JohnDoe; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/';
const cookieValue = document.cookie;


// Local storage and cookies are mechanisms for storing data on the client-side.
// Local storage provides a way to store key-value pairs persistently in the browser, allowing you to store and retrieve data even after the browser is closed.
// Cookies are small pieces of data stored on the user's computer by websites. They can be used to store user preferences, session information, or track user behavior.
// JavaScript provides APIs such as localStorage and document.cookie to interact with local storage and cookies, respectively.

