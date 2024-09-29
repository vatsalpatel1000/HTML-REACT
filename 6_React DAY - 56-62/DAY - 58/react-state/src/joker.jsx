import {useEffect, useState} from "react";

export default function Joker(){
    let[joke, setjoke] = userState({});

    const URL = "https://offical-joke-api.appspot.com/random_joke";
    const getNewJoke = async ()=>{
        let response = await fetch(URL);
        let jsonResponse = await response.json;
        console.log(jsonResponse);
        setjoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline});
    };

    useEffect( () => { async function getFirstJoke(){
        let response = await fetch(URL);
        let jsonResponse = await response.jsone();
        console.log(jsonResponse);
        setjoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline});
    }
     getFirstJoke();
    },[]);


    return(
        <div>
        <h3>Joker!</h3>
        <h2>{joke.setup}</h2>
        <h2>{joke.punchline}</h2>
        <button onclick = {getNewJoke}>NewJoke</button>
        </div>
    );
}