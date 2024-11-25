import {useEffect, useState} from "react";

export default function Joker(){
    let[joke, setjoke] = useState({});

    const URL = "https://offical-joke-api.appspot.com/random_joke";
    
    const getNewJoke = async ()=>{
        let response = await fetch(URL);
        let jsonResponse = await response.json;
        console.log(jsonResponse);
        setjoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline});
    };

    // when page load/ refresh directly joke will print not stack as promise useEffect help  => first time of rendring or change we use useEffect
    useEffect( () => { 
        async function getFirstJoke(){           // in usestate we can't use async await so we create function and call in useEffect 
            let response = await fetch(URL);                    
            let jsonResponse = await response.jsone();
            console.log(jsonResponse);
            setjoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline});
        }
        getFirstJoke();     // Call same function
    }, []); // it will work for single time

    return(
        <div>
        <h3>Joker!</h3>
        <h2>{joke.setup}</h2>
        <h2>{joke.punchline}</h2>
        <button onclick = {getNewJoke}>NewJoke</button>
        </div>
    );
}