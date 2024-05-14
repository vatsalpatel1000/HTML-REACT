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
        return this.name ;
    },

    getMarks : () =>  {
        console.log(this);          // parent's scope -> window
        return this.marks ;
    },
    getinfor : function(){
        settimeout(() =>{
            console.log(this);      //student
        },2000)
    },
    getinfor : function(){
        settimeout(function (){
            console.log(this);      //window
        },2000)
    },
};

