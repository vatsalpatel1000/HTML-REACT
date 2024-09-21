import  {sum,PI} from "./Math.js"
console.log(sum(20,20));
import { generate } from "random-words";
console.log(generate());

// const fruits = require("./Fruits");     // call another direcory data to here 
// console.log(fruits);


// const Math = require("./Math");    // Take/call require data from .Math file
// console.log(Math);
// console.log(Math.sum(2,2));



console.log( process.argv);           // By Default 2 argv pass
    let args = process.argv;           // Call argument given on NODE Terminal and work on it 

for(let i = 2; i < args.length; i++){
    console.log('hello to ',args[i]);
}

let n = 5;
for(let i = 0; i <n; i++){
    console.log('HI to ',i);
}
console.log('bye');