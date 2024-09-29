import { useState } from "react"

export default function CommentsForm(){
let [forData, setFormData] = useState({
    username: "",
    remarks: "",
    rating : "5",
})

    let handleInutChange =(event)=>{
        setFormData((currData) =>{
            return { ...currData, [event.target.name]: event.target.calue };
        });
    };

    let handleSubmit = (event)=>{
        console.log(formData);
        event.preventDefault();
        setFormData()
        username: "",
        remarks: "",
        rating : "5",
    });
    }

    return(
    <div><h4>Give a Comment </h4>
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input placeholder="username" type="text" value={formData.username} onChange={handleInutChange} name ="username" />
        <br></br><br></br>

        <label htmlFor="username">Username</label>
        <textarea value = {FormData.remarks} placeholder ="add few username" onChange={handleInutChange}>
            Remarks</textarea>
        <br></br><br></br>

        <label htmlFor="remarks">remark</label>
        <textarea value = {FormData.remarks} placeholder ="add few remarks" onChange={handleInutChange}name ="remarks" id = "remarks">
            rating</textarea>
        <br></br><br></br>
        
        <label htmlFor="remark">rating</label>
        <input placeholder="rating" type="number" min ={1} max={5} value={formData.rating} onChange={handleInutChange} namen ="rating" id = "rating"/>
        <br></br><br></br>
        <Button>Add Comment</Button>
    </form>
    </div>)
}