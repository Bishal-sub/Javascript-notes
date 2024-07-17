
//callbacks,Promise,async,await

//sync in js 

//synchronous
//code run in particular sequence of instruction given to program

//Example
console.log("first");
console.log("Second");
console.log("Third");//output will be in sequence


//Asynchronous
//sometimes important instruction get blocked due to some previous instruction , which causes delayin ui 
// so asynchronouscode execution allows to execute next instruction without blocking the flow.

//Example 
//suppose there are code running 
//code 1  run normally //ok
//code 2  run normally // ok
//code 3  suppose this takes a bit of time to run . then let it take time and run parallelly. and move to another code
//code 4  run normally //ok
///code 5  run normally //ok
///code 6  run normally //ok
///code 7   suppose this takes a bit of time to run . then let it take time and run parallelly. and move to another code
//code 8  run normally //ok

//for example
/* console.log("first");
console.log("Second");

setTimeout(()=>{
    console.log("three");
},1000)//time out

console.log("Third"); */

// here the output will be in sequence but it will skip the three. three will print but after 2s  but the code will not be disturb .
//here code didn't wait for three to execute it move to another.


//Callbacks
//it is the arugment to another function

//Example
function sum(x,y){
    console.log(x+y);
}
function result(x,y,sumCallback){
    sumCallback(x,y);
}
result(10,2,sum);

//Call back hell

//Callback hell in JavaScript can be defined as a situation where multiple nested callbacks are used to handle asynchronous operations, leading to deeply nested and hard-to-read code.

//This style of programming becomes diffcult to understanding and manage

// Example:
// Making a sandwich with nested callbacks

// Step 1: Get bread
function getBread(callback) {
    console.log("Getting bread...");
    setTimeout(function() {
        callback();
    }, 1000); // Simulating time to get bread
}

// Step 2: Add peanut butter
function addPeanutButter(callback) {
    console.log("Adding peanut butter...");
    setTimeout(function() {
        callback();
    }, 1500); // Simulating time to add peanut butter
}

// Step 3: Add jelly
function addJelly(callback) {
    console.log("Adding jelly...");
    setTimeout(function() {
        callback();
    }, 1500); // Simulating time to add jelly
}

// Step 4: Put sandwich together
function makeSandwich() {
    console.log("Sandwich is ready!");
}

// Nested callbacks to make a sandwich
getBread(function() {
    addPeanutButter(function() {
        addJelly(function() {
            makeSandwich();
        });
    });
});

/*1) getBread, addPeanutButter, addJelly, and makeSandwich represent different steps in making a sandwich.

2) Each step is simulated with setTimeout to represent the time it takes to complete that action.

3) The functions are called sequentially using nested callbacks, where each step waits for the previous one to finish before proceeding.

This example uses a familiar and simple task (making a sandwich) to illustrate how nested callbacks can be used to handle steps that depend on each other. 
Each function represents a clear and understandable action in the process of making a sandwich, making it easier for a beginner to follow along with the sequence of steps. */


//promises 
 
//Promise is for "eventual" completion of task.it on an object.and solution to call back hell.
// js promises can be 
// 1) pending : resulst undefine
// 2) resolve : fulfilled
// 3) rejected :: error object



const myPromise = new Promise((resolve, reject) => { 
                                                                        // Perform an asynchronous operation, e.g., fetching data
    setTimeout(() => {
                                                                       // If operation succeeds, call resolve with result
      resolve('Operation successful!');
      
                                                                        // If operation fails, call reject with an error
                                                                         // reject('Operation failed!');
    }, 2000); // Simulating a delay of 2 seconds
  }); 


  //.then() &.catch()
  //promise.then((red)=>{})
  //promise.catch((red)=>{})

    
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() < 0.8; // Simulate success most of the time
        if (success) {
          resolve('Data fetched successfully!');
        } else {
          reject('Failed to fetch data!');
        }
      }, 2000); // Simulating a delay of 2 seconds
    });
  }
  
  // Using the Promise with then and catch
  fetchData()
    .then((result) => {
      console.log('Promise resolved:', result); // Output when resolved
    })
    .catch((error) => {
      console.error('Promise rejected:', error); // Output when rejected
    });
  

 //Async - Await

 //async function always return a Promise
 //In JavaScript, `async` is a keyword used to define asynchronous functions, which enable non-blocking behavior for handling operations such as fetching data, making network requests, or performing time-consuming tasks without blocking the main execution thread.
  
 //async function myfun(){..}

 async function name(){
    console.log("name");

 }

 //await
 //pauses the execution of async function until the promisr is settled.
// await is always use under async function 

function api(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("user data");
            resolve(400);

        },1000);
    });
}

async function getuserdata (){
    await api(1);
    await api(2);
}

  
//lets check the difference of all of it 

//1) Callback Hell Example
function api(callback) {
    setTimeout(() => {
        console.log("user data");
        callback(400);
    }, 1000);
}

function getuserdata(callback) {
    api(result1 => {
        console.log("First API call completed with result:", result1);
        api(result2 => {
            console.log("Second API call completed with result:", result2);
            callback();
        });
    });
}

getuserdata(() => {
    console.log("All API calls completed.");
});



//2)Callback Functions
function api(callback) {
    setTimeout(() => {
        console.log("user data");
        callback(400);
    }, 1000);
}

function handleFirstApiResponse(result1, callback) {
    console.log("First API call completed with result:", result1);
    api(result2 => {
        handleSecondApiResponse(result2, callback);
    });
}

function handleSecondApiResponse(result2, callback) {
    console.log("Second API call completed with result:", result2);
    callback();
}

function getuserdata(callback) {
    api(result1 => {
        handleFirstApiResponse(result1, () => {
            callback();
        });
    });
}

getuserdata(() => {
    console.log("All API calls completed.");
});




//3)Using Promises

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("user data");
            resolve(400);
        }, 1000);
    });
}

function getFirstUserData() {
    return api();
}

function getSecondUserData() {
    return api();
}

function getuserdata() {
    return getFirstUserData()
        .then(result1 => {
            console.log("First API call completed with result:", result1);
            return getSecondUserData();
        })
        .then(result2 => {
            console.log("Second API call completed with result:", result2);
        })
        .catch(error => {
            console.error("Error occurred:", error);
        });
}

getuserdata().then(() => {
    console.log("All API calls completed.");
});





//4) Using async/await
function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("user data");
            resolve(400);
        }, 1000);
    });
}

async function getuserdata() {
    try {
        const result1 = await api(1);
        console.log("First API call completed with result:", result1);
        
        const result2 = await api(2);
        console.log("Second API call completed with result:", result2);
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

getuserdata();


























































































































9