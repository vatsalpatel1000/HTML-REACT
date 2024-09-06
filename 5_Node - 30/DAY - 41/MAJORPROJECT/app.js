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
const flash = require("connect-flash");
const passport = require("passport");                       // passport is used for hashing & saulting for auithentication
const LocalStratagy = require("passport-local"); 
const User = require("./models/user.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/reviews .js");
const userRouter = require("./routes/user.js");

const _ = require('passport-local-mongoose');

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

app.use(session({                                           // cookie session created
    secret : "mysupersecretstring",
    resave : false ,
    saveUninitialized : true,
    cookie : {                                              // save session id and password in cookie for limited time 
        expire :  Date.now() + 7 * 24 * 60 * 60 * 1000,     // days * hr * minutes * sec * mili-sec
        maxAge : 7 * 24 * 60 * 60 * 1000,
        httpOnly: true                                      // http website
    },
}));                                                        //  session as a middleware after that all request has their own session_id and value 

const app = express();
const port = 8080;

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.engine("ejs",ejsMate);                                      //  use for layout include 

app.use(flash());                                               // flash middleware
app.use(passport.initialize());                                 // passport create default / automatic username for DB when connection established
app.use(passport.session());

passport.use(new LocalStratagy(User.authenticate()));           // all user are authenticate using LocalStratagy
passport.serializeUser(User.serializeUser());                   // store user data in session
passport.deserializeUser(User.deserializeUser());               // Unstore user data from session

app.get('/', (req, res) => {                                    // App root url
    res.send("root is working");
});

app.use((req,res,next)=>{                                       // flash msg create for add listing
    res.locals.success = req.flash("success");                  // flash msg for error occer
    res.locals.error = req.flash("error");
    console.log(log.locals.success);
    next(); 
});

// app.get("/demouser",async(req,res)=>{                           // Demo user create
//     let fakeUser = new User ({                                  // passport automatic check user is register or not       
//         email : "student@gmail.com",    
//         username : "delta_student" 
//     });
//     let registerUser = await User.register(fakeUser, "helloworld");         // register is tatic method of passport                    
//     res.send(registerUser);
// });

app.use("/listings",listingRouter);                                 // Restructuring listings
app.use("/listings/:id/reviews",reviewRouter);                      // Restructuring reviews
app.use("/",userRouter);

app.all('*',(req,res,next)=>{
    next( new ExpressError(404,'page Not found'))                   // Create custom error for new page 
});

app.use(( err,req,res,next )=>{                                     // Middleware create for custome error handler for try-catch / wrapAsync 
    let{statusCode = 500, message = 'Something went wrong!' } = err;
    res.status(statusCode).render("error.ejs", {message});
    //res.status(statusCode).send(message);
    //res.send("something went wrong")
});

app.listen(8080, () => {                                            // App Listining port
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