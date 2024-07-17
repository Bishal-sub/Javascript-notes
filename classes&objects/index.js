//An object in JavaScript is a standalone entity, with properties and type. 

let person = {
    name: 'ram',
    age: 30,
    greet: function() {
        console.log('Hello!');
    }
};
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log('Hello!');
    };
}

let person1 = new Person('John', 30);

//classes
//provide a more convenient and clearer syntax to create objects and deal with inheritance.

class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log('Hello!');
    }
}

let person2 = new Person('ram', 30);


class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);  // Calls the parent constructor
        this.grade = grade;
    }

    study() {
        console.log(`${this.name} is studying.`);
    }
}

let student1 = new Student('ram', 20, 'A');
