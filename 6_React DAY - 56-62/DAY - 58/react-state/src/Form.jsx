import { useState } from "react";

export default function Form(){
    let [formData, setformData] = useState({
        fullName : "",
        username : "",
        Password : "",
    });

    let handleInputChange = (event) =>{
        setFormData((currData) =>{
            return {...currData , [event.target.name] : event.target.value};
        });
    };

    let handleSubmit = (event) => {             // for reset the form 
       event.preventDefault();
       setFormData({
       fullName : "",
       username : "",
       Password : "",
       });
    };

    return(
        <form onSubmit={handleSubmit}>

            <label htmlFor = "Fullname"> Full Name</label>
            <input placeholder="enter fullName" name = "fullName" type ="text" value = {formData.fullName} onChange = {handleInputChange} id="Fullname"/>   // Full name should me same as state variable 
            <br></br>
            <label htmlFor = "Username"> Username </label>
            <input placeholder="enter Username" name = "Username" type ="text" value = {formData.username} onChange = {handleInputChange} id="Username"/>
            <br></br>
            <label htmlFor = "Password"> Password </label>
            <input placeholder="enter Password" name = "Password" type ="text" value = {formData.Password} onChange = {handleInputChange} id="Password"/>
            
            <button>Submit</button>
        </form>
    );
}