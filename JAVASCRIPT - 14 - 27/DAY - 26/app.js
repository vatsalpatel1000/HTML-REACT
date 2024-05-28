// Async Function

async function greet(){
    return "hello world";       //by default return a promise
}

let hello = async () => {};     //arrow function returns a promise 


async function greet1(){
    throw "weak connection";
    return "hello";
}

greet1()
    .then((result)=>{
        console.log("promise was resolved");
        console.log("result was :", result);
    })
    .catch((err)=>{
        console.log("promise was rejected with err: ",err);
    });