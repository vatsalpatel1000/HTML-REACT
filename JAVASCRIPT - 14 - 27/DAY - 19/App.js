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


