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
    return new Promise((resolve,reject)=>{
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


// our first api request

let url = "https://catfact.ninja/fact";
fetch(url)                              // Fetch return/comes with promise and its used to send request to URL to retrieve data.
.then((res) => {
    return res.json();                  // Successful completion of the fetch request, the then method converts the response (res) to JSON format.
})
.then((data) => {
    console.log("data1 = ", data.fact)
    return fetch(url);                // call fatch url api call again
})

.then((res) => {
    return res.json();                // convert in json format
})
.then((data) => {
    console.log("data1 = ", data.fact)
})
.catch((err)=>{
    console.log(err);
});

console.log('i am happy');              // this will print first and api will call later 


// API using async await 

let url1 = "https://catfact.ninja/fact";

async function getfacts(){
    try{
    let res1 = await fetch(url);                // we hase to parse data in string to jason data for make readable
    let data1 = await res1.json();
    console.log(data.fact)

    
    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(data2.fact)
    }catch(e){
        console.log(e);
    }
        console.log('bye');
}


// API Using Axios => Library to make HTTP request


async function getFacts(){
    try{
        let res =await axios.get(url1);
        console.log(res)
    }catch(e){
        console.log(e);
    }
}

// example

let btn = document.querySelector('button');

btn,addEventListener('click', async()=>{
    let fact = await getfacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText =  fact;
});


let url2 = "https://catfact.ninja/fact";

async function getfacts(){
    try{
    let res = await axios.get(url2);                // axios directly give us json data we we dont need to conver to json its already done by axios
    return(res.data.fact);
    }catch(e){
        console.log('ERROR-', e);
        return "No fact found"
    }
}


//  Sending Headers with API requests

const url4 = "https://icanhazdadjoke.com"
async function getjokes(){
    try{
        const config = { headers: { Accept: "application/json" }};      // pass info with header which format type of data  we want
        let res = await axios.get(url, config);
        console.log(res.data);
    }
    catch(err){
        console.log(err);
    }
}


//  Activity using Query Strings

let url5 = "https://univetsities.hipolabs.com/search?name=";
let btn1 = document.querySelector("button");

btn.addEventListener('click', async() => {
    let country = document.querySelector("input").value;
    console.log(country);

    let colArr = await getColleges(country);
    console.log(colArr); 
    show(colArr);
});

function show(colArr){
    let list = document.querySelector('#list');
    list.innerText = '';
    for (col of colArr){
        console.log(col.name);
        let li = document.create.Elemement('li');
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country){
    try{
        let res = await axios.get(url + country);
        return (res.data);
    } catch(e){
        console.log('error :',e);
        return []; 
    }
}