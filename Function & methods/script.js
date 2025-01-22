//function 
// function are block of code that perform a specific task can be omboled whrn needed
//syntax

/* function name(params) {
    
} */
//functionName(); // calling function


//Example
/* function myfunction() {
    
    console.log("starting function");
}
myfunction(); */
   

function myfirstfunction(message){//parameter -> input
console.log(message);
}
myfirstfunction("Hello THis is my function");//argument


function mysecondfunction(message,Number){
    console.log(message,Number);
    }
    mysecondfunction("Hello THis is my function",101);


//function to calculate sum of two number


function sum(num1,num2){
    console.log(num1 + num2);

}
sum(2,2);
//OR
function add(num1,num2){
    s = num1 + num2;
    return;
}
let answer = sum(4,5);
console.log(answer);

//function parameter are local variable of function and its make blocks scope of function



//Arrow function

//syntax
/* const functionName = (para1,para2..) =>{
    //do here
} */

//sum of two digit using arrow function

const arrowsum = (x,y) =>{
    console.log(x+y);
}
arrowsum(20,3); 



//multiplication using arrow  function

const arrowmulti = (x,y) =>{
    console.log(x*y);
}
arrowmulti(20,3);


//foreach loop in array
//ar.forEach(callbackfunction)

// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Use forEach to iterate over each element of the array
numbers.forEach(function(number) {
    console.log(number); // Print each number to the console
});

//Example
const name =["ram" ,"shyam " , "hari"]

name.forEach((name) => {
    console.log(name);
})


//Map
//Create a new array with the result os some operation.

//arr.map(callback(value,index,array))

const Name =["ram bahadur" ,"shyam bahadur " , "hari bahadur"]

Name.map((val)=>{
    console.log(val);
});


//To create new array
let num = [11,12,13,14]

let newnum = num.map((num)=>{
    return num * num;
})
console.log(newnum);
console.log(num);//orginal is not change 

///filter
//create new array of  element that give true for condition filter

// syntax
/* let arr = arr.filter(( )=>{
    
}) */

    //example to filter even num
    let number = [11,14,18,20,25,55,59]
    let evennum = number.filter((even)=>{
        return even % 2 === 0;
    });
    console.log(evennum);



 //Reduce
 
// performs some operation & reduces the array toa single value and return it

// syntax
//array.reduce(callback(accumulator, currentValue, index, array), initialValue)


const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];

const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1; // Increment the count for each fruit
    return acc;
}, {}); // Initial value is an empty object

console.log(count); // Output: { apple: 2, banana: 3, orange: 1 }

const numb = [5, 12, 3, 7, 19];

const max = numb.reduce((accumulator, currentValue) => {
    return Math.max(accumulator, currentValue);
}, numb[0]); // Initial value is the first element of the array

console.log(max); // Output: 19












