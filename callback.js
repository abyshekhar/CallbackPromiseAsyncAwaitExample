// //Synchronous callback
// const doSomeWork = (success, error) => {
//   console.log("Do some work");
//   try {
//     //do something
//     success();
//   } catch (err) {
//     error();
//   }
//   console.log("do another stuff");
// };

//Asynchronous callback
const doSomeWork = (success, error) => {
  console.log("Do some work");
  setTimeout(() => {
    try {
      //do something
      success();
    } catch (err) {
      error();
    }
  }, 5000);
  console.log("do another stuff");
};
const success = () => {
  console.log("Work completed successfully");
};
const error = () => {
  console.log("Work completed with errors");
};

doSomeWork(success, error);

//Callback hell
const files = [{name:'file1'},{name:'file2'},{name:'file3'},{name:'file4'}]
const readFile=(file,callback)=>{
  setTimeout(()=>{
    console.log('processing ...', file.name);
    callback(file);
  },2000)
}
//Callback hell
 readFile(files[0],function (file) {
  readFile(files[1],function (file) {
    readFile(files[2],function(file){
      readFile(files[3],function(file){
      })
    })
  })
});
