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


// Settingup for promises 

function savetoDb(data,success, failure){
    let internetSpeed = Math.floor(Math.random()*10) + 1;
    if(internetSpeed > 4 ){
        success();
    }
    else{
        failure();
    }
}

savetoDb(
    ("apna college"), 
    ()=>{
    console.log("Yout data was saved");

        savetoDb("hello world", ()=>{
            console.log("Yout data2 was saved");

            savetoDb("hello world", ()=>{
                console.log("Yout data3 was saved");
            },
            () => {
                console.log("weak connection, data3 not saved");
            })
        },
    () => {
        console.log("weak connection, data 2not saved");
    })
    }, 
    () =>{
    console.log("weak connection, data not saved");
}
);


// Refectoring with promises    solve Callbackhell with promises

function savetoDb(data){
    return new Promise((success, failure) =>{
        let internetSpeed = Math.floor(Math.random()*10) + 1;
        if(internetSpeed > 4 ){
            success('Yout data was saved');
        }
        else{
            failure('weak connection, data not saved');
        }
    });
}


// promises  ->  methods =>  then(),    catch()

function savetoDb(data){
    return new Promise((resolved, rejected) =>{
        let internetSpeed = Math.floor(Math.random()*10) + 1;
        if(internetSpeed > 4 ){
            resolved('Yout data was saved');
        }
        else{
            rejected('weak connection, data not saved');
        }
    });
}

savetoDb('apna college')
    .then(()=>{
        console.log('promise was resolved')
    })
    .catch(()=>{
        console.log("promise was rejected")
    });


// Promise Chaining    IMPROVED VERSION of Callback Nesting OR Callback Hell

function savetoDb(data){
    return new Promise((resolved, rejected) =>{
        let internetSpeed = Math.floor(Math.random()*10) + 1;
        if(internetSpeed > 4 ){
            resolved('Yout data was saved');
        }
        else{
            rejected('weak connection, data not saved');
        }
    });
}

savetoDb('apna college')
    .then(()=>{
        console.log('promise1 was resolved');
        savetoDb('apna college')
            .then(()=>{
                console.log('promise2 was resolved');
                savetoDb('apna college')
                    .then(()=>{
                        console.log('promise3 was resolved');
                });
            });
    })
    .catch(()=>{
        console.log("promise was rejected");
    });


//Result and Errors in Promises

function savetoDb(data){
    return new Promise((resolved, rejected) =>{
        let internetSpeed = Math.floor(Math.random()*10) + 1;
        if(internetSpeed > 4 ){
            resolved('Yout data was saved');
        }
        else{
            rejected('weak connection, data not saved');
        }
    });
}

savetoDb('apna college')
    .then((result)=>{
        console.log("data1 saved");
        console.log('result of promise:', result);
        return savetoDb('apna college')
    })    
    .then((result)=>{
        console.log("data1 saved");
        console.log('result of promise:', result);
        return savetoDb('apna college')
    })    
    .then((result)=>{
        console.log("data1 saved");
        console.log('result of promise:', result);
        return savetoDb('apna college')
    })   
    .catch((error)=>{
        console.log("promise was rejected");
        console.log("error of promises:", error);
    });


// Refactoring the old color change in 1 sec code with promises and then catch method
    
h1 =document.querySelector('h1');

function changeColor(color,delay){
    return  new Promise((resolved,rejected)=>{
        setTimeout(()=>{
            h1.style.color = color;
        },delay);
    })
}

changeColor("red",1000)
.then(()=>{
    console.log("red color");
    return changeColor("green",1000)
})
.then(()=>{
        console.log("yellow  color");
        return changeColor("yellow",1000)
})
.then((result)=>{
    console.log("blue color");
    return changeColor("Blue",1000);
    console.log('result of promise:', result);
})
.catch((error)=>{
    console.log("promise was rejected");
    console.log("error of promises:", error);
});