const doSomethingAsync = async (flag) => {
  console.log("doSomethingAsync : inside doSomethingAsync");
  await doSomeWork(flag)
  .then(res=>console.log(res))
  .catch(err=>console.log(err))
  console.log("doSomethingAsync : continue with other work");
};

const doSomeWork = (flag) => {
 return new Promise((resolve,reject)=>{
    console.log("work in progress");
    setTimeout(() => {
        flag? resolve('work is completed successfully'):reject('work completed with error')
      }, 5000);
      
 }) 
};
const doSomething = (flag) => {
  console.log("doSomething : inside doSomething");
  doSomeWork(flag)
  .then(res=>console.log(res))
  .catch(err=>console.log(err))
  console.log("doSomething : continue with other work");
};

//success scenario
doSomething(true);
doSomethingAsync(true);

// Uncomment this to test the error scenario
// error scenario
// doSomething();
// doSomethingAsync();
