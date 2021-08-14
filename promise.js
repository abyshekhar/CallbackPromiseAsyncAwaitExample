const doSomeWork = (flag) => {
  console.log("Do some work");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      flag
        ? resolve("Work completed successfully")
        : reject("Work completed with errors");
    }, 2000);
  });
};

//success scenario

doSomeWork("anything")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

// Uncomment this to test the error sceanrio
//failure scenario
// doSomeWork()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));
