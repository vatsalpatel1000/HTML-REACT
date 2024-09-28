import { useState } from "react";

funtion init(){
    return Math.random();
}

export default function Counter(){
//  let [stateVariable,setStateVariable] = useState(0);                     // Create Counter
    let [ count, setCount ] = useState(0);
    console.log("Component was re-render")
    // let inCount = () => {
    //     setCount (count + 1);
    //     console.log(count);
    // };

    let inCount = () =>{
        setCount((currCount)=>{
            return currCount+1;
        });
        setCount((currCount)=>{
            return currCount+1;
        });
    }

    //setCount(25);    

    return(
        <div>
            <h3> Count = { count } </h3>
            <button onClick = {inCount}> increase count </button>
        </div>
    ) 
}