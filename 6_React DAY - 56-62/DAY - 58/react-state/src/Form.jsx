import { useState } from "react";

export default function Form(){
    let [formData, setformData] = useState({
        fullName : "",
        username : ""
    });

    let handleInputChange = () =>{
        setFormData((currData) =>{
            return {...currData , [event.target.name] : event.target.value};
        });
    };

    let handleSubmit = (event) => {
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
            <input placeholder="enter fullName" name = "fullName" type ="text" value = {formData.fullName} onChange = {handleNameChange}/>
            <br></br>
            <label htmlFor = "Username"> Password </label>
            <input placeholder="enter Username" name = "Username" type ="text" value = {formData.username} onChange = {handleUsername}/>
            <br></br>
            <label htmlFor = "Password"> Password </label>
            <input placeholder="enter Password" name = "Password" type ="text" value = {formData.Password} onChange = {handleUsername}/>
            
            <button>Submit</button>
        </form>
    );
}