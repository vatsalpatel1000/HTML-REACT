// for each array method
let print = function(a) {
    console.log(a);
} 

let arr = [1,2,3,4,5];
arr.forEach(print);

// or       using arrow function

arr.forEach((a) => {
    console.log(a);
});

//or   foreach for object method
let arr1 = [
    {
        name:'aman',
        marks : 95,
    },
    {
        name:'shradha',
        marks : 94.4,
    },
    {
        name:'rajat',
        marks : 94.4,
    },
];

arr1.forEach((a)=>{
    console.log(a.marks);
});

// Map Fucntion

let num = [1,2,3,4];
let double = num.map(function(a){
    return a*2;
});


let num1 = [1,2,3,4];
let double1 = num.map((a) => {
    return a*2;
});

// object 

let gpa = arr1.map((a) =>{
    return a.marks / 10;
});


// Filter function

let num2 = [1,2,3,4,5,6,7,8,9,10,11,12];
let ans = num2.filter((a)=>{
    return  a % 2== 0;
    return   a %2!== 0;
    return  a < 5;
});


// every                        T + F = F   LIke AND OPERATIOE
[2,4,6].every((a)=>{
    a % 2 == 0;
})

//some                          T + F = T   LIke OR OPERATIOE
[2,4,6,1].some((b)=>{
    b % 2 == 0;
});

// Reduce function

let num6 = [1,2,3,4];
let finalval = num6.reduce((c,d) => {
    return c+d;
});

// Maximum using reduce

let nums = [2,3,4,5,3,4,7,8,1,2];
let max= -1;
for( let i =0; i< arr.length; i++){
    if(max< arr[i]){
        max = arr[i];
    }
}

// using reduce and arrow fucntion
let result = nums.reduce ((max, el) => {
    if( el > max){
        return el;
    }
    else{
        return max;
    }
})

// practice question 
// all no in put array are mutiple of 10 or not
let nums7 = [10,20,30,40,5]
let ans7 =nums.every((el)=>{
    el % 10==0  
});

// find min np. in array
let result6 = nums7.reduce ((min, el) => {
    if(min< el){
        return min;
    }
    else{
        return el;
    }
});

// Spread
let arr2 = Math.min(1,2,3,0,4,1,3);
console.log(arr2);

arr3 = [1,2,3,0,4,1,3];
console.log(...arr3);

//spread with array litrals
let odd = [1,3,5,7,9];
let even = [2.4,6,8,10];
let num3 = [...odd, ...even];   // concatination

//spread with Object litrals

const data = {
    email : "vatsalpatel@gmail.com",
    password:"abcd",
};

const datacopy = {...data, id : 123, contary : "india"}

// arrary convert to object 
let arrays = [1,2,3,4,5];   //val
let obj = {...arr };        //obj -> key: value                 so for array index is the key here while convert from array to object


// REST
function sum(...args){      //arguments
    for( let i =0 ; i<args.length;i++) {
        console.log('you gave us :', args[i]);
    }
}

function min(){
    console.log(arguments);
    console.log(arguments.length);
    arguments.push(1);                  // argument is not an array so all array methos will not work with arguments
}


function sum1(...args){
    return args.reduce((min,el)=>{
        sum + el;
    });
}