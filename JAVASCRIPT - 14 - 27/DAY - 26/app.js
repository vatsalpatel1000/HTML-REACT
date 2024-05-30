// Async Keyword

async function greet(){
    return "hello world";       //by default return a promise
}

let hello = async () => {     //arrow function returns a promise 
    return 5;
};

async function greet1(){
    throw "weak connection";    //error
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


// Await Keyword        -> work under async => stop all other promise till current promise stage is not sattled

function getNum(){
    return new Promise((resolve,rejecte)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000)
    })
}   

async function demo(){
    await getNum();
    await getNum();
    await getNum();

}



// Refactoring the old color change in 1 sec code with promises,catch method and async,await keyword

h1 = document.querySelector('h1');

function changeColor(color,delay){
    return new Promise((resolve,rejecte)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve();
        },delay);
    })
}

async function demo(){
    await changeColor("red",1000)
    await changeColor("green",1000)
    await changeColor("green",1000)
    await changeColor("blue",1000)
}


// Handling Rejections

function changeColor(color,delay){
    return new Promise((resolve,rejecte)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*5)+1;
            if(num > 3){
                rejecte('promise reject'); 
            }
            h1.style.color = color;
            resolve();
        },delay);
    })
}

async function demo(){
    try{
        await changeColor("red",1000)
        await changeColor("green",1000)
        await changeColor("green",1000)
        await changeColor("blue",1000)

    }catch(err){                                    // so we use here try catch for code run continue
        console.log("error caught");
        console.log(err);
    }

    let a = 5;                                  // if rejecte this code will not gonna work
    console.log(a);
    console.log("new number =", a+3);
}


// JSON
//Json key always a string 
//JS Object take undefined as value
//js doesn"t support Undefined 
//JSON return data in form of string 

let jsonRes = {"fact":"Julius Ceasar, Henri II, Charles XI, and Napoleon were all afraid of cats.","length":74} //API Data in json
let validRes = JSON.parse(jsonRes);     // convert json data to js object 
console.log(validRes.fact);


let student = {
    name : "vatsal",
    marks : 95
}
JSON.stringify(student);                // convert js object to json data 