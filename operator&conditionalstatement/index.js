


//1. Arithmetic Operators
//Arithmetic operators are used for basic math operations:

//Addition (+): Adds two numbers together.
//Subtraction (-): Subtracts one number from another.
//Multiplication (*): Multiplies two numbers.
//Division (/): Divides one number by another.
//Remainder (%): Gives the remainder after division.
//Exponentiation (**): Raises a number to a power.


let a = 10;
let b = 20;
console.log(a+b)//THis will give direct result 
//or
console.log("a+b =", a+b)//This will give output as a+b=result

let length = 10;
let breadth = 20;
console.log("Area =", length*breadth);

//use other operator also like this 


//2. Assignment Operators
//Assignment operators assign values to variables:

//Assignment (=): Assigns a value to a variable.
//Addition assignment (+=): Adds a value to the variable.
//Subtraction assignment (-=): Subtracts a value from the variable.
//Multiplication assignment (*=): Multiplies the variable by a value.
//Division assignment (/=): Divides the variable by a value.
//Remainder assignment (%=): Performs remainder division on the variable.

let x = 10;
x += 5; // equivalent to x = x + 5; (x is now 15)




/* 3. Comparison Operators
Comparison operators compare values and return true or false:

Equal (==): Checks if two values are equal.
Not equal (!=): Checks if two values are not equal.
Strict equal (===): Checks if two values are exactly equal.
Strict not equal (!==): Checks if two values are not exactly equal.
Greater than (>): Checks if the left value is greater than the right.
Greater than or equal to (>=): Checks if the left value is greater than or equal to the right.
Less than (<): Checks if the left value is less than the right.
Less than or equal to (<=): Checks if the left value is less than or equal to the right. */

let p = 10;
let q = 5;
console.log(p > q); // true
console.log(p === q); // false




/* 4. Logical Operators
Logical operators combine conditions and return true or false:

Logical AND (&&): Returns true if both conditions are true.
Logical OR (||): Returns true if at least one condition is true.
Logical NOT (!): Reverses the result of a condition. */

/* Logical Operator Example: Drink Tea if Not Drink Milk */

let age = 45;
let drinkMilk = false;

if (age >= 10 && !drinkMilk) {
  console.log("Drink tea.");
} else {
  console.log("Drink milk.");
}




/* 6. Bitwise Operators (Advanced)
Bitwise operators manipulate numbers at the bit level:

Bitwise AND (&): Performs a bitwise AND operation.
Bitwise OR (|): Performs a bitwise OR operation.
Bitwise XOR (^): Performs a bitwise XOR operation.
Bitwise NOT (~): Inverts the bits of a number.
Left shift (<<): Shifts bits to the left.
Sign-propagating right shift (>>): Shifts bits to the right, preserving sign.
Zero-fill right shift (>>>): Shifts bits to the right, filling with zeros. */
let num1 = 5; // binary 101
let num2 = 3; // binary 011
console.log(num1 & num2); // 1 (binary 001)


/* Unary Operators in JavaScript

Unary operators act on a single operand, and they are placed either before (prefix) or after (postfix) the operand. Here are the unary operators in JavaScript:

1. Unary Plus (+):
The unary plus operator precedes its operand and attempts to convert it into a number if it isn't already.

Example:
let numString = "5";
let num = +numString; // num is 5 (converted from string to number)

2. Unary Negation (-):
The unary negation operator precedes its operand and negates it.

Example:
let x = 5;
let negated = -x; // negated is -5

3. Increment (++) and Decrement (--)
The increment operator (++) increases the numeric value of its operand by 1. If used postfix, with operator after operand (for example, x++), then it returns the value before incrementing. If used prefix (for example, ++x), then it returns the value after incrementing.

Example:
let a = 5;
console.log(++a); // 6 (prefix increment)
console.log(a++); // 6 (postfix increment)
console.log(a);   // 7

let b = 10;
console.log(--b); // 9 (prefix decrement)
console.log(b--); // 9 (postfix decrement)
console.log(b);   // 8

4. Logical NOT (!):
The logical NOT operator converts its operand to a boolean value and returns the inverse.

Example:
let isTrue = true;
let isFalse = !isTrue; // isFalse is false

5. Typeof Operator (typeof):
The typeof operator returns a string indicating the type of the operand.

Example:
let variable;
console.log(typeof variable); // "undefined"

let str = "Hello";
console.log(typeof str); // "string"

6. Delete Operator (delete):
The delete operator deletes an object, an object's property, or an element at a specified index in an array.

Example:
let obj = { name: "John", age: 30 };
delete obj.age; // deletes the age property from obj

let arr = [1, 2, 3];
delete arr[1]; // removes the element at index 1 in arr

Note: The delete operator should not be used on predefined JavaScript object properties. It can crash your application.

7. Void Operator (void):
The void operator discards an expression's return value.

Example:
<a href="javascript:void(0);">Click here</a>

This example creates a hyperlink that does nothing when clicked (void(0) returns undefined).

*/



//CONDITIONAL STATEMENT
//to implement some condition in code

//1) if statement 

/* if (condition) {
    
} */
let Age = 20;
if (Age>18){
 console.log("you are 18+");
}
if(Age<18){
    console.log("you are not 18+");

}

//2) if...else statement:

/* if (condition) {
  
} else {
  
} */
let name = "bishal"
if (name === "bishal") {
  console.log(name)
  
} else {
  console.log("Not Bishal")
}

// 3) if...else if...else statement (used when you have multiple conditions to check):
let personage  = 35;
let person;
if (personage >=50 && personage<=110) {
  person = "grandfather";
  
} else if (personage <50 && personage >= 25){
  person = "father";
  
}else if (personage < 25 && personage > 0){
  person ="son";
}else{
  person="enter valid age"
}
console.log(person);

// 4) Switch statement (used when you have multiple possible conditions to evaluate):

/* switch (expression) {
  case value1:
      // code to be executed if expression === value1
      break;
  case value2:
      // code to be executed if expression === value2
      break;
  default:
      // code to be executed if expression doesn't match any case
} */
let day = "tuesday"
switch(day){
  case "monday":{
    console.log("monday");
    break;
  }
  case "tuesday":{
    console.log("Tuesday");
    break;
  }
  case "Wednesday":{
    console.log("wednesday");
    break;
  }
  default:
    console.log("Today is neither Monday nor Tuesday or wednesday")
}

