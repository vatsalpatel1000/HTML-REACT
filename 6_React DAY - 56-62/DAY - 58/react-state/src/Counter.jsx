import { useState } from "react";

function init(){
    return Math.random();
}

export default function Counter(init){
//  let [stateVariable,setStateVariable] = useState(0);                     // Create Counter
    let [ count, setCount ] = useState(0);                                  // Create State 
    console.log("Component was re-render")
    // let inCount = () => {
    //     setCount (count + 1);
    //     console.log(count);
    // };

    let inCount = () =>{                        // counter value will not increse in UI with +1 so that will use state in react as setCount
        setCount((currCount)=>{                 // setState   is async method so we use call back here 
            return currCount+1;
        });                                     // after finish 1 then only 2 will run
        setCount((currCount)=>{
            return currCount+1;
        });
    }

    //setCount(25);                             // if setstate is not change then rerender is not possible cz react store the last value 

    return(
        <div>
            <h3> Count = { count } </h3>
            <button onClick = {inCount}> increase count </button>               {/* counter value will not increse in UI with +1 so that will use state in react as setCount */}
        </div>
    ) 
}