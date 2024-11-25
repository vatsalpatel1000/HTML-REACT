import { useState } from "react"

export default function CommentsForm(){
let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating : "5",
})

    let handleInputChange = (event)=>{
        setFormData((currData) =>{
            return { ...currData, [event.target.name]: event.target.value };
        });
    };

    let handleSubmit = (event)=>{
        console.log(formData);
        event.preventDefault();
        setFormData(                            // for reset the form
            username : "",
            remarks : "",
            rating : 5,
        );
    }

    return(
    <div><h4>Give a Comment </h4>
        <form onSubmit={handleSubmit}>

            <label htmlFor="username">Username</label>
            <input placeholder="username" type="text" id="username" value={formData.username} onChange={handleInputChange} name ="username" />
            <br></br><br></br>

            <label htmlFor="username">Username</label>
            <textarea value = {FormData.remarks} placeholder ="add few username"id="username" onChange={handleInputChange}>
                Remarks</textarea>
            <br></br><br></br>

            <label htmlFor="remark">remark</label>
            <textarea value = {FormData.remarks} placeholder ="add few remarks" id="remark" onChange={handleInputChange}name ="remarks" id = "remarks">
                rating</textarea>
            <br></br><br></br>
            
            <label htmlFor="remark">rating</label>
            <input placeholder="rating" type="number" min ={1} max={5} value={formData.rating} id="remark" onChange={handleInputChange} name ="rating" id = "rating"/>
            <br></br><br></br>
            <Button>Add Comment</Button>
        </form>
    </div>)
}