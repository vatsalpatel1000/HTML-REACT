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

//or   foreach for array function
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

arr.forEach((a)=>{
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


// every                        T + F = F
[2,4,6].every((a)=>{
    a % 2 == 0;
})

//some                          T + F = T
[2,4,6].some((b)=>{
    a % 2 == 0;
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
// all no in put array are mu;tiple of 10 or not
let nums7 = [10,20,30,40,5]
let ans7 =nums.every((el)=>{
    el % 10==0  
});

// find min np. in array
let result6 = nums7.reduce ((max, el) => {
    if(max< el){
        return min;
    }
    else{
        return el;
    }
});