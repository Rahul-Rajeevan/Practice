fetch("")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });


  
let getData = async () => {
  let res = await fetch("url");
  let result = await res.json();
  console.log(result);
};
