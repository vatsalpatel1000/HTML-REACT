const mongoose = require('mongoose');

main()
    .then((res)=>{
    console.log(res);
    console.log("connection successfull");
    })
    .catch((err) => {
        console.log(err)
    });

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

//Schema
const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        require : true,                 // Not Null
    },
    author : {
        type : String,
    },
    price : {
        type : Number,
        min : [1, "Please enter a valid price"]         // Minimum 1 for price should be their      // "Please enter a valid price" this is a custom error 
    },
    discount : {
        type : Number,
        default : 0,                        // By Default Discount : 0 will there for every data
    },
    genre : [String],
    category : {
        type : String,
        enum : ["fiction","non-fiction"],               // in data from both, one value should be theri other wise error will genrate
    },
});

const book = mongoose.model("book",bookSchema);

let book1 = new book({
    title : "Maths XII",
    author : "RD Shrma",
    price : 200
})
book1.save()
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    });

//validator in updation
book.findByIdAndUpdate("101",{ price : -500}, {runValidators : true})           // schema validation only work at time of insertion not on updation but if we want to continew same schema validation after updation so we use {runValidators : true} 
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err.error.price.properties.message)                     // it show the custom generate error by user here "Please enter a valid price" is custome generated error when value given less than 1 
    });

    