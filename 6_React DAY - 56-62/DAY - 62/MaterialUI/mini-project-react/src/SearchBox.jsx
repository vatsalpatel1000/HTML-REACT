import TextField from '@mui/material/TextField';
import Button from '@mui/material/TextField'; 
import "./SearchBox.css";
import {useState } from "react";

export default function SearchBox(){
    let [city, setcity] = useState("");

    const API_URL = "https://api.openwethermap.org/data/2.5/weather";
    const API_KEY = 

    let getWealtherInfo = async () =>{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&unites=metric`)
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result ={
            temp: jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_Like,
            weather : jsonResponse.weather[0].description,
        };
        console.log(result);
    }

    let handlechange = (evt) =>  {
        setcity(evt.target.value);
    }

    let handleSubmit = (evt) => {
        evt.preventDefault();
        setcity("");                // refresh and set to null
        getWealtherInfo("");
    }

    return(
        <div>
            <h3>Search for the weather </h3>
            <form>
                <TextField id='city' label='CIty name' variant='outlined' onChange={handlechange} />
                <br></br>
                <Button variant="contained" type="submit">Search</Button>
            </form>
        </div>
    )
}