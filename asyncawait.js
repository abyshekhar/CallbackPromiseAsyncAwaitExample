const doSomethingAsync = async () => {
  console.log("doSomethingAsync : inside doSomethingAsync");
  const result = await doSomeWork();
  console.log(result);
  console.log("doSomethingAsync : continue with other work");
};
const doSomething = () => {
  console.log("doSomething : inside doSomething");
  const result = doSomeWork();
  console.log(result);
  console.log("doSomething : continue with other work");
};
const doSomeWork = () => {
  return new Promise((resolve, reject) => {
    console.log("work in progress");
    setTimeout(() => {
      try {
        resolve("work completed successfully");
      } catch (err) {
        reject("work completed with error");
      }
    }, 5000);
  });
};

doSomething();
doSomethingAsync();
