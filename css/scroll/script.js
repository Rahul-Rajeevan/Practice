// // script.js
// const scrollContainer = document.querySelector('.scroll-container');

// window.addEventListener('scroll', () => {
//   const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
//   const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
//   scrollContainer.scrollTo(0, maxScroll * scrollPercentage);
// });


function varScopeExample() {
    if (true) {
      var localVar = "I am var";
    }
    console.log(localVar); // Accessible within the function
  }
  varScopeExample();
console.log(localVar);