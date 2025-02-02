//ARRAY IN JAVASCRIPT

//ARRAY is colletion of items

let name = ["ram" , "shyam ", "hari" ," sita" ,"gita" ];
let age = [20,21,19,25,18];
console.log(name,age);
console.log(typeof name);// to check type
console.log(name.length);//to print length 
console.log(age.length);//to print length 


//array indices


let Name = ["ram" , "shyam ", "hari" ," sita" ,"gita" ];
console.log(name [0]);//to check access value of 0 in array
console.log(name [4]);//to check access value of 0 in array
console.log(name [5]);//if we try to acess the value which in not inside the array the result will be undefine

//to change array value 
Name[4] = "ram bhadur"
console.log(Name [4]);//it will change gita with ram bhadur

//looping on array 

//for loop
let personname = ["ram" , "shyam ", "hari" ," sita" ,"gita" ];
for (let i = 0; i < personname.length; i++) {
   console.log(personname[i])
    
}

//for of loop 
let pname = ["jack " , "oggy ", "motu" ," patlu"  ];
for (const personname of pname) {
   console.log(personname.toLocaleUpperCase())//printing in uppercase
}

//ARRAY methods

// 1 push() //add to end
const mobilename = ["samsung" ,"iphone" ,"Redmi","oppo"];
console.log(mobilename);

mobilename.push("blackberry");//blackberry will be added in last 
console.log(mobilename);

// 2 pop() // delete from end & return
const fruits = ["apple", "mango", "banana"];
console.log(fruits);

/* let deletedfruit = fruits.pop();
console.log("deletedfruit=", deletedfruit); */ // to check delete items 

fruits.pop()
console.log(fruits);


// 3 tostring ()
const vegetable = ["tamato", "carrot", "chilly"]
console.log(vegetable);
console.log(vegetable.toString());//to change array into string 

 // 4) concat () //to joins multuples array 
 
 let bike = ["bullet" , "crossfire" ," ns"]
 let car = ["suzuki", "Supra", "kia"]

 let vechiles = bike.concat(car);
 console.log(vechiles);

 // 4)unshift ( ) //to add arrain start
 let Bike = ["bullet" , "crossfire" ," ns"]
 Bike.unshift("herohonda");
 console.log(Bike)

 //5 shift() // delete from start and return
    let del =  Bike.shift();
    console.log('deleted =', del);
    console.log(Bike);

//6 slice() // return s piece of array
    const VEG = ["tamato", "carrot", "chilly"];
    let vege = VEG.slice(1);
    console.log(VEG);
    console.log("slice=", vege);

//7 splice() : change orginal array 

const Fruits = ["apple", "mango", "banana"];
console.log(Fruits);

Fruits.splice(1,0,"grapes");//to add
console.log(Fruits);

const Fruits2 = ["apple", "mango", "banana"];
let Fr = Fruits2.splice(1);//to remove 
console.log(Fr);


const num = [1,2,3,4];
console.log(num);
num.splice(3,1,5);
console.log(num)













