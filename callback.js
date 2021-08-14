const doSomeWork = (flag, success, error) => {
  console.log("Do some work");
  flag ? success() : error();
};
const success = () => {
  console.log("Work completed successfully");
};
const error = () => {
  console.log("Work completed with errors");
};

// call the doSomeWork function with a flag parameter so
// that it calls back the success function
doSomeWork('anything', success, error);

// Uncomment this to test the error scenario
// call the doSomeWork function without a flag parameter so
// that it calls back the error function
//doSomeWork(success, error);
