//Here we  will write our java script code 


//To print in display
document.write("first java script code");
document.write('<br>')//To Print below
document.write("this is my second code");


//TO Print on conlose 
console.log('first js code ');
console.log('this is my second code');


//lets learn variables

//varaibles are coinatiner for data 
//TO declare varaibale you need to use keyword like let, var ,const

let x = 10; // defining and initializing a let variable
var y = "Hello"; // defining and initializing a var variable
const PI = 3.14159; // defining and initializing a const variable

//let x = 10; declares a variable x using let and initializes it with the value 10. let is used for block-scoped variables that can be reassigned.
//var y = "Hello"; declares a variable y using var and initializes it with the string "Hello". var is function-scoped or globally scoped and can be reassigned.
//const PI = 3.14159; declares a constant PI using const and initializes it with the value 3.14159. Constants cannot be reassigned after initialization.




let name = "bishal"
console.log(name);   // here name is the cointainer which hold the data bishal
document.write('<br>')//to print below
document.write(name)  



let name2 = "bishal"
let age = "20"
let subject = "javascript"
console.log(name2, age,  subject);
document.write('<br>')//to print below
document.write(name2, age,  subject);



//Data types

//(1) Primitive Data Types:

//Number: Represents numeric values, e.g., 42, 3.14, -7.
//String: Represents sequences of characters, e.g., "Hello", 'JavaScript', "123".
//Boolean: Represents true or false values.
//Undefined: Represents a variable that has been declared but has not been assigned a value.
//Null: Represents an intentional absence of any object value.
//Symbol: Represents a unique identifier. Introduced in ECMAScript 6 (ES6).




//(2) Composite or NOn-Primitive Data Type:

//Object: Represents a collection of key-value pairs (properties and methods).
//Example

const person ={
    Name: "Bishal",
    age: 20,
    gender: "male"
    
  
};//here person is object 
console.log(person)//to print all value of person
console.log(person["Name"])//to print only name 
console.log(person.age)//to print only age

//you can print by using both method (person.["name"]) OR (person.age)

//TO change the name 
console.log(person["Name"] = "bishal subedi");

//Array
//function

//Special Data Type:

//BigInt: Represents arbitrary-precision integers. Introduced in ECMAScript 2020 (ES11).









