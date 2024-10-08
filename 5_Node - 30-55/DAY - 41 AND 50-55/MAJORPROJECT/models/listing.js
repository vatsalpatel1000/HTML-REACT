const mongoose = require("mongoose");
const Review = require("./review.js");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title : {
        type : String,
        require : true,
    } ,
    description : String,  
    image :{ 
        // type : String,
        // default : "https://rb.gy/bhbpss",
        // set : (v) => v === "" ? "https://rb.gy/bhbpss" : v, // turnery operator  it set => if v === null ,if null set URL 
        url: String,
        filename : String,
        

    },
    price : Number,
    location : String,
    country : String,
    reviews : [
        {
            type : Schema.Types.ObjectId,
            ref : "Review",
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref : "User",
    },
    coordinates : {
        type: [Number],
        requires:true,
    },
    geometry : {
        type: {
          //type :   String,
            enum : ['Point'],
            required :true,
        },
        coordinates:{
            type : [Number],
            required : true
        },
    },
    coordinates:{
        type : [Number],
        enum :["mountains", "arctic","farms","deserts"],
        required:true,
    },
}
);

listingSchema.post("findOneAndDelete", async (listing) => {                     // Delete review if lisitng or card/ hotel delete
    if(listing){
        await Review.deleteMany({ _id : { $in: lisiting.reviews } });
    }
});

const Listing = mongoose.model("Listing", listingSchema );
module.exports = Listing;