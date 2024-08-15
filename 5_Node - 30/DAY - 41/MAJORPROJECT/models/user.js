const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    email :{
        type : String,
        require : true
    } 
});

userSchema.plugin(passportLocalMongoose);     // add hash password and saulting and one user automatic when connect to DB

model.exports = mongoose.model("User",userSchema);