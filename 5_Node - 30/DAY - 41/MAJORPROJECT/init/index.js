const mongoose = require("mongoose");
const initData = require("./data.js");
const Schema = mongoose.Schema;
const Listing = require("../models/listing.js")


main()
    .then(() => {
        console.log("Connection successful");
    })
    .catch((err) => {
        console.log(err);
    });

    async function main(){
        await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust' ,  { useNewUrlParser: true, useUnifiedTopology: true });

    }

    const initDB = async() => {
        await Listing.deleteMany({});
        await Listing.insertMany(initData.data); 
        console.log("data was initialized");
    } 

initDB();