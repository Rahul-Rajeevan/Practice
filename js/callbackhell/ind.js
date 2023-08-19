// Callback Hell

getUserData(
  function (userData) {
    getPosts(
      userData,
      function (posts) {
        displayPosts(
          posts,
          function () {
            console.log("Posts displayed successfully!");
          },
          function (error) {
            console.error("Error displaying posts:", error);
          }
        );
      },
      function (error) {
        console.error("Error fetching posts:", error);
      }
    );
  },
  function (error) {
    console.error("Error fetching user data:", error);
  }
);

// Promises

function getUserData() {
  return new Promise((resolve, reject) => {
    // Asynchronous API call to fetch user data
    // Assume the 'userData' is the fetched data
    resolve(userData);
    // If an error occurs during the API call, use 'reject' instead of 'resolve'
    // reject(new Error("Error fetching user data"));
  });
}

function getPosts(userData) {
  return new Promise((resolve, reject) => {
    // Asynchronous API call to fetch posts based on userData
    // Assume the 'posts' is the fetched data
    resolve(posts);
    // If an error occurs during the API call, use 'reject' instead of 'resolve'
    // reject(new Error("Error fetching posts"));
  });
}

function displayPosts(posts) {
  return new Promise((resolve, reject) => {
    // Asynchronous code to display posts on the web page
    // Assume that displaying posts is successful, so we call 'resolve'
    resolve();
    // If an error occurs during displaying posts, use 'reject' instead of 'resolve'
    // reject(new Error("Error displaying posts"));
  });
}

// Using Promises to chain the asynchronous operations
getUserData()
  .then((userData) => getPosts(userData))
  .then((posts) => displayPosts(posts))
  .then(() => {
    console.log("Posts displayed successfully!");
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
