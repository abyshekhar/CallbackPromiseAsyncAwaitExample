const doSomeWork = () => {
  console.log("Do some work");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        //code to do some work
        resolve("Work completed successfully");
      } catch (err) {
        reject("Work completed with errors");
      }
    }, 2000);
  });
};

//success scenario
doSomeWork()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
