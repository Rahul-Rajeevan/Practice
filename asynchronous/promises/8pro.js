fetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error fetching data");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
