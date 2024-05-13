function hello(){
    console.log('hello');
}
hello();


function forloop(){
    for(i=0;i<=5;i++){
        console.log(i);
    }
}
forloop();


function ifelse(){
    let age = 18;
        if(age >= 18){
            console.log('adult');
        }
        else{
            console.log('not adult');
        }
}
ifelse();


function rolldice(){ 
let dice = (Math.floor(Math.random() * 6 )+1);
console.log(dice);
}
rolldice();

// Function with argument
function details(name,age){
    console.log(name + ' and  age is ' + age)
}

details("vatsal",23);
details("Nirbhay",23);


function sum(a,b){
    console.log( a + b);
}
sum(11,12);


function average(a,b,c){
    console.log( a + b +c) /3;
}
average(2,4,6);

function table(n){
    for(i=n;i<=n*10; i =i+n){
        console.log(i);
    }
}
table(2);

// Return leyword
function sum1(a,b){
    console.log('hello');
    console.log('hello');
    return(a+b);
    console.log('hello2');
    console.log('hello2');
}
console.log(sum1(10,2));


/*sum of n no. */
function getsum(n){
    let sum = 0;
    for(i=0;i<=n;i++){
        sum = sum + i;
    }
    return(sum);
}
getsum(n);



let str4 =['hi','hello','bye','!'];
    function concat(str4){
        let result = '';
        for(let i = 0; i<str4.length; i++){ 
            result = result + str4[i];
        }
        return result;
    }
    concat(str4);


// Function scope  
let sum = 54;               //Global scope          this can call anywhere, inside and outside the function
function calsum(a,b){
    let sum = a+b;          // Function scope       this can't call outside the function
}

calsum(1,2)



// block ascope 
{
    let a = 25;
    console.log(a); 
}
console.log(a);             // block ascope         can't call outside   


for( i = 0; i<= 5 ; i++){
    console.log(i);
}
console.log(i);              // block ascope         can't call outside  


let age = 25;
if(age >=18){
    let str = 'adult';
    console.log(str);
}
console.log(str);            // block ascope         can't call outside  


// Laxical scope
function outerfun(){
    let x = 5;
    let y = 6;
    function innerfun(){
        let a = 10;
        let b = 8;

        console.log(x);     // Child function can access parent function property 
        console.log(y);
        console.log(a);
        console.log(b);
    }
    console.log(x);
    console.log(y);
    console.log(a);           // outside function can't call , parent function can't access their child function property
    console.log(b);
    innerfun(10);
}

// Practice question
let greet = 'hello';                // global scope
    function changegreet(){
        let greet = 'namaste';      
            console.log(greet);     // block scope

            function innergreet(){  
                console.log(greet); // lexical scope
            }    
            innergreet();
    }
    console.log(greet);
    changegreet();


// Function expresion

let sum = function(a,b){
    return a+b;
}
sum(1,2);

let hello = function(){
    console.log('hello');
}
hello = function(){
    console.log('namaste');
}

// Higher order function

function multiplegreet(func,count){
    for(let i= 1; i<=count; i++){
        func();
    }
}
let greet = function(){
    console.log('hello');
}
multiplegreet(greet,1000);


// Higher order function // function factory

function oddorevenFactory(request){
    if(request == 'odd'){
        let odd =function(n){
        console.log(!(n%2==0));
    }
    return odd;
    }else if(request == 'odd'){
        let even =function(n){
        console.log(n%2==0);
    }
    return even;
}else{
    console.log('wrong request');
}
}
let request ='odd';