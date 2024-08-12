const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require("method-override");
const ExpressError = require('./utils/ExpressError.js');
const ejsMate = require("ejs-mate");
// const Chat = require('../../DAY - 40/NODE WITH MONGODB/models/chat');
// const Review = require("./models/review.js");
// const router = express.Router();
// const wrapAsync = require("../utils/wrapAsync.js");
// const { listingSchema,reviewSchema } = require('../schema.js');
// const Listing = require("../models/listing.js");
const session = require("express-session");

app.use(session({                                   // cookie
    secret : "mysupersecretstring",
    resave : false ,
    saveUninitialized : true,
    cookie : {                                              // save session id and password in cookie for limited time 
        expire :  Date.now() + 7 * 24 * 60 * 60 * 1000,     // days * hr * minutes * sec * mili-sec
        maxAge : 7 * 24 * 60 * 60 * 1000,
        httpOnly: true                                      // http website
    },
}));        //  session as a middleware after that all request has their own session_id and value 
app.use(flash());

const listings = require("./routes/listing.js");
const reviews = require("./routes/reviews .js");


const app = express();
const port = 8080;

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.engine("ejs",ejsMate);                                                  //  use for layout include 

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


app.use("/listings",listings);                                 // Restructuring listings
app.use("/listings/:id/reviews",reviews);                      // Restructuring reviews

app.get('/', (req, res) => {                                  // App root url
    res.send("root is working");
});

app.all('*',(req,res,next)=>{
    next( new ExpressError(404,'page Not found'))             // Create custom error for new page 
});

app.use(( err,req,res,next )=>{                               // Middleware create for custome error handler for try-catch / wrapAsync 
    let{statusCode = 500, message = 'Something went wrong!' } = err;
    res.status(statusCode).render("error.ejs", {message});
    //res.status(statusCode).send(message);
    //res.send("something went wrong")
});

app.listen(8080, () => {                                      // App Listining port
    console.log("Example app listening on port 8080");
});

// //Index Route 
// app.get('/chats', async (req, res) => {
//     let chats = await Chat.find();
//     console.log(chats);
//     res.render("index.ejs",{chats});
// });

// //New Route
// app.get('/chats/new',(req,res)=>{
//     res.render("new.ejs");
// })

// //Create Route
// app.post('/chats',(req,res)=>{
//     let {from , to , msg }=req.body
//     let newChat = new Chat({
//         from : from,
//         to : to,
//         msg : msg,
//         created_at : new Date()
//     });
//     newChat.save()      // save to DBS
//     .then((res)=>{
//         console.log("chat was saved")
//     })
//     .catch((err) => {
//         console.log(err)
//     })
//     res.redirect("/chats");
// });

// //Edit Route
// app.get('/chats/:id/edit',async(req,res)=>{
//     let {id} = req.params;
//     let chat = await Chat.findById(id);
//     res.render("edit.ejs",{ chat });
// })

// //Update Route
// app.put('/chats/:id',async(req,res)=>{
//     let {id} = req.params;
//     let {msg : newmsg} = req.body;
//     let updateChat = await Chat.findByIdAndUpdate(id,{msg : newmsg},{runValidators:true},{new : true})
//     console.log("updated chat");
//     res.redirect("/chats");
// })

// //DELETE Route
// app.delete('/chats/:id', async(req,res)=>{
//     let{ id } = req.params;
//     let DeletedcChat = await Chat.findByIdAndDelete(id);
//     console.log(DeletedcChat);
//     res.redirect("/chats");
// })