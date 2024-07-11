const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title : {
        type : String,
        require : true,
    } ,
    description : String,  
    image :{ 
        type : String,
        default : "https://rb.gy/bhbpss",
        set : (v) => v === "" ? "https://rb.gy/bhbpss" : v, // turnery operator  it set => if v === null ,if null set URL 
    },
    price : Number,
    location : String,
    country : String,
});

const Listing = mongoose.model("Listing", listingSchema );
module.exports = Listing;