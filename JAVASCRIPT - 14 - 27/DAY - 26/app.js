// Async Function
    
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