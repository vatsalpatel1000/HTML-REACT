import { useState, useEffect } from "react";


export default function Counter(){
    let[Countx,setCount] = useState(0);
    let[Countxy,setCount] = useState(0);

    let incCountx = () =>{
        setCount((currCount)=> currCount +1);
    };

    let incCounty = () =>{
        setCount((currCount)=> currCount +1);
    };

    useEffect(function printSomething(){                // print function when render => perform side effect in funtion componenet  
        console.log("this is a side-effect");
    }, 
    [countx],           // means state variable (countx) will only execute 
    []                  // it will execute for single time when counter render => we can decide how many time we have to execute. only first time or multiple times when rerender 
);                      // First time counter will is render and after that all time counter will rerender.

    return(
        <div>
            <h3>count =</h3>
            <button onClick={incCountx}>+1</button>
            <h3>count =</h3>
            <button onClick={incCounty}>+1</button>
        </div>
    );
}