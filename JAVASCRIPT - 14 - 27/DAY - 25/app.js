// function hello(){
//     console.log('insilde hello fnx');
//     console.log('hello');
// }

// function demo(){
//     console.log('calling hello fnx');
//     hello();
// }

// console.log('calling demo fnx');
// demo();
// console.log('done ,bye');

// Practice
function one(){
    return 1 ;
}

function two(){
    return one() + one();  
}

function three(){
    let ans = two() + one();
    console.log(ans); 
} 

three();

// Single line threaded
let a = 25;                 // js print or work line by line not multiple
console.log(a);
let b= 10;
console.log(b);
console.log(a+b);           // synchronus = line by line code 

setTimeout(()=>{            // asynchronus = not line by line code use callback for wait code
    console.log('apna college');        // js will devide it multiple operation in callback where normal work will done by js and wating or callback wi=ork done by browser.
},2000);
console.log('hello...');                //this will print first then complete wating time of callback then it will print, thi sting will done by js


// callback hell        callback nesting -> Callback hell

h1 =document.querySelector('h1');

function changeColor(color,delay,nextcolorChange){
    setTimeout(()=>{
        h1.style.color = color;
        if(nextcolorChange) nextcolorChange();
    },delay);
}

changeColor("red",1000,()=>{
    changeColor("green",1000,()=>{
        changeColor("yellow",1000,()=>{
            changeColor("blue",1000,()=>{ 
            });
        });
    });
});

// setTimeout(()=>{
//     h1.style.color = "red";
// },2000);
// setTimeout(()=>{
//     h1.style.color = "green";
// },2000);
// setTimeout(()=>{
//     h1.style.color = "yello";
// },2000);
// setTimeout(()=>{
//     h1.style.color = "blue";
// },2000);
