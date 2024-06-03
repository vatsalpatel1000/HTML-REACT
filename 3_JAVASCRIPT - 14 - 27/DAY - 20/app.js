// Try catch                                          // function inside object (this == object) function outside object (this == windows)  
const student = {
    name : 'vatsal',
    age : 27,
    eng : 95,
    math :93,
    phy : 97,

    abc : function(){
            let avg = (this.eng + This.math + this.phy )/3;
            console.log(avg);
    }
}



// Try catch
console.log('hello');
console.log('hello');
try{
console.log(a);
}catch(err){                                        // catch error
    console.log('catch an error');
    console.log(err);
}
console.log('hello');
console.log('hello');



// Arrow function
const sum = (a,b) =>{                   
    console.log(a+b);
}
sum = (10,20);

const cube = (n) =>{
    return n*n*n;
}
cube(5);

const pow = (a,b) =>{
    console.log(a**b);
}
pow(5,5);


const mul = (a,b) => a*b;
mul(5,5);


//settimeout
console.log('hi there');

setTimeout(() => {
    console.log('apna college');
}, 4000);                               // delay 4 sec for call that function

console.log('welcome to ');


settimeout(() => {
    console.log('apna college');
}, 4000)


let id = setinterval(() =>{
    console.log('apna college');
},2000);                                // continue print after 2 sec
console.log(id);

clearInterval(id);                      // to stop continue print interval with its id


// This keyword with arrow function and normal function
const a = 5;                            // global scope 
const student1 = {
    name : "vatsal",
    age : '27',
    marks : '75',
    prop : this,                     // global scope     here This not in any function it is global scope means rule will work like globle scope. 

    getName : function () {
        return this.name ;          // student
    },

    getMarks : () =>  {
        console.log(this);          // parent's scope -> window
        return this.marks ;
    },
    getinfo : function(){
        settimeout(() =>{           // arrow function never change their rule   function call arrow function so parent's scope is == arrow scope
            console.log(this);      //student
        },2000)
    },
    getinfo : function(){
        settimeout(function (){     // function call by funtion but between setimeout is there so function change its rule and settimeout is windows so for function scope is windows 
            console.log(this);      //window
        },2000)
    },
};



//Practice
// write an arrow funcion that return the square of a no. 'n';

const square  = (n) => {
    return n*n; 
}

const square1  = n => n*n; 
square(5);

// write function that print 'hello world ' 5 time at interval of 2s \

const id1= setInterval(() =>{
    console.log('hello world'); 
},2000);

const id2= setInterval(() =>{
    return clearInterval(id1);         // stop setinterval after 5 sec
},5000);


// arrow function named arrayaverage that accept arrya of no. and return the average of those no.
    
const arrayaverage = (arr) => {
let sum1 = 0;
    for(let i = 0; i<= arr.length; i++){
            let sum = arr[i] + sum1;
    }
    console.log(sum/3);
}

    let arr = [1,2,3,4,5,6];
    arrayaverage(arr);


// arrow function name is even tat take single no as argument and return if is even or not

let num = 4;
const arr5 = (num) => 
    num%2==0;



// find output
const object ={
    Message : 'Hello, world',

    logMessage() {
        console.log(this.Message);          //this == global object
    }
};
setTimeout(object.logMessage, 1000);           // Window.message



//find output

let length = 4;
function callback(){
    console.log(this.length);
} 
const object5 = {
    lenght: 5,
    method5(callback){
        callback();
    },
};

object.method(callback,1,2);