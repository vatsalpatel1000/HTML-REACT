import { useState } from "react";


export default function Counter(){
    let[inCountx,setCount] = useState(0);
    let[inCounty,setCount] = useState(0);

    let incCountx = () =>{
        setCount((currCount)=> currCount +1);
    };

    let incCounty = () =>{
        setCount((currCount)=> currCount +1);
    };

    useEffect(function printSomething(){
        console.log("this is a side-effect");
    }, []);

    return(
        <div>
            <h3>count =</h3>
            <button onClick={inCountx}>+1</button>
            <h3>count =</h3>
            <button onClick={inCounty}>+1</button>
        </div>
    );
}