// Factory Function
function Personmaker(name, age){
    const person = {
        name : name ,
        age : age,
        talk(){
            console.log(`hi , my name is ${this.name}`);
        },
    };
    return person;
}

let p1 = Personmaker('vatsal',28);      // create copy in memory 
let p2 = Personmaker('Bhavesh',26);     // create copy in memory


// Constructor - doesnot return anythind & start with capital letter
function Person(name, age){
    this.name = name;
    this.age = age;
}
person.prototype.talk = function(){
    console.log(`hi , my name is ${this.name}`);
}

let b = new person('vatsal',28);      // can't copy in memory 
let n = new person('Bhavesh',26);     // can't copy in memory


// Classes
class Person{
    constructor(name , age){
    this.name = name;
    this.age = age;
}
talk(){
    console.log(`hi , my name is ${this.name}`);
}
}

let b1 = new person('vatsal',28);      // create copy in memory 
let b2 = new person('Bhavesh',26);  


// Inheritance
class person{
    constructor(name , age){
        this.name = name ;
        this.age = age;
    }
    talk(){
        console.log(`Hi, my name is ${this.name} `)
    }
}
class student extends person{
    constructor(name ,age, marks){
        // this.name = name ;
        // this.age = age;
        super(name , age);                              // parent call constructor called
        this.marks = marks;
    }
    // talk(){
    //     console.log(`Hi, my name is ${this.name} `)
    // }
}
class Teacher extends person{
    constructor(name ,age, subject){
        // this.name = name ;
        // this.age = age;
        super(name , age);                              // parent call constructor called
        this.subject = subject;
    }
    // talk(){
    //     console.log(`Hi, my name is ${this.name} `)
    // }
}
