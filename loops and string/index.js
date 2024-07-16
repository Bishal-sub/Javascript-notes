// loops in javascript

// 1)for loop

/* //syntax
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
} */

for (let i = 0; i < 50; i++) {
  console.log("trying for loop");
  document.write("Trying loop ");
} //execute 5 times

/* imagine you have five toys lined up in a row. Each time you play with one toy, you say out loud "trying for loop". Then, after you play with each toy, you write down "Trying loop" on a piece of paper.
    
    So, you start with the first toy, say "trying for loop", write "Trying loop" on the paper. Then you move to the next toy, say "trying for loop" again, and write "Trying loop" on the paper again. You keep doing this until you've played with all five toys.
    
    In this code, the `for` loop works just like playing with each toy in a row. It starts from zero toys (or zero in programming terms), and each time it plays (or iterates), it says "trying for loop" and writes "Trying loop" on the paper. It does this five times, just like playing with each of the five toys.
    
    So, the `for` loop makes sure everything happens in order, like playing with each toy one after another, and writing down what you did each time. */

let sum = 0;
for (let i = 0; i <= 10; i++) {
  sum = sum + i;
}
console.log(sum);

for (let index = 0; index < 5; index++) {
  console.log("index =", index);
}

// 2) While loop

//syntax
/*  while (condition) {
    
 } */

let i = 1;
while (i <= 10) {
  console.log("While loop=", i);
  i++;
}

// 3) do while loop

//syntax
/* do {
    
} while (condition); */

/* let j = 10;
do {
    console.log("j=", j)
}while(j <= 10); */

// 4) for of loop

/* for (const iterator of object) {
    
} */ //helps to use loop in array and string

let name = "bishal";
for (let i of name) {
  console.log("i=", i);
}

// 5)for in loop

//syntax
/* for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
} */ // A `for...in` loop in JavaScript iterates over the enumerable properties of an object, assigning each property key to a variable for each iteration.

const person = {
  name: "bishal",
  age: 20,
  city: "New York",
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

//STRINGS
// A string in JavaScript is a sequence of characters enclosed in single quotes (`'`) or double quotes (`"`), used to represent text data.

//TO create string
// -> let Name = "bishal"

// String length
// -> Name.length

//string indices
// Name[0], Name[1], Name[2]

//Template Literals
//Template literals are string literals allowing embedded expressions and multi-line strings. They are enclosed by backticks (\`), enabling interpolation of variables and expressions using `${}` inside the string.
let Name = `Bishal`;
console.log(Name);
// console.log(typeof Name);

//String Method
// 1) str.length
let str1 = "Hello";
let lengthOfString = str1.length; // returns 5

// 2) str.toUpperCase()
let str2 = "hello";
let upperCaseStr = str2.toUpperCase(); // returns "HELLO"

// 3) str.toLowerCase()
let str3 = "WORLD";
let lowerCaseStr = str3.toLowerCase(); // returns "world"

// 4) str.charAt(index)
let str4 = "Hello";
let charAtIndex = str4.charAt(1); // returns "e"

// 5) str.concat(str2)
let str5 = "Hello";
let str20 = " World";
let concatenatedStr = str5.concat(str20); // returns "Hello World"

// 6) str.includes(substring)
let str6 = "Hello World";
let includesSubstring = str6.includes("World"); // returns true

// 7) str.indexOf(substring)
let str7 = "Hello World";
let indexOfSubstring = str7.indexOf("World"); // returns 6

// 8) str.lastIndexOf(substring)
let str8 = "Hello World";
let lastIndexOfSubstring = str8.lastIndexOf("o"); // returns 7

// 9) str.slice(startIndex, endIndex)
let str9 = "Hello World";
let slicedStr = str9.slice(6, 11); // returns "World"

// 10) str.substring(startIndex, endIndex)
let str10 = "Hello World";
let substring = str10.substring(6, 11); // returns "World"

// 11) str.substr(startIndex, length)
let str11 = "Hello World";
let substr = str11.substr(6, 5); // returns "World"

// 12) str.trim()
let str12 = "   Hello   ";
let trimmedStr = str12.trim(); // returns "Hello"

// 13) str.replace(oldSubstring, newSubstring)
let str13 = "Hello World";
let replacedStr = str13.replace("World", "Universe"); // returns "Hello Universe"

// 14) str.split(separator)
let str14 = "apple,banana,orange";
let splitArray = str14.split(","); // returns ["apple", "banana", "orange"]

// 15) String.fromCharCode(charCode)
let charCode = 65;
let fromCharCode = String.fromCharCode(charCode); // returns "A"
