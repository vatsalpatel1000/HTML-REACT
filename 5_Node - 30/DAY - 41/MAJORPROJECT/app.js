const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require("method-override");
const Listing = require("./models/listing");
const Chat = require('../../DAY - 40/NODE WITH MONGODB/models/chat');
const ejsMate =require("ejs-mate");
const wrapAsync =require("./utils/wrapAsync.js");
const wrapAsync =require("./utils/ExpressError.js");
const ExpressError = require('./utils/ExpressError.js');

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

// app.get('/testListing', async(req,res)=>{
//     let sampleListing = new Listing({
//         title : "My New Villa",
//         description : "By the beach",
//         price : 1200,
//         location : "Calangute, Goa",
//         countary : "India",
//     });
//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("Successful testing")
// });

//Index Route
app.get("/listings",wrapAsync( async (req, res) => {
    try {
        const allListings = await Listing.find({});
        res.render("listings/index.ejs", { allListings });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}));

//New Route
app.get('/listings/new',(req,res)=>{
    res.render("listings/new.ejs");
})

//Show Route
app.get('/listings/:id',wrapAsync(async(req,res)=>{
    let {id} = req.params;
    const listing =  await Listing.findById(id);
    res.render("listings/show.ejs", {listing})
}));

//Create Route
app.post("/listings",wrapAsync( async(req,res,next)=>{                  // Create custome error handling for try-catch / wrapAsync 
    if(!req.body.listing){
        throw new ExpressError(404, "Send valid data for listing");
    }
//     let {title,description, image, price, country,location} = req.body;
//     let newchat = new Chat({
//         title : title,
//         description : description,
//         image:image,
//         price:price,
//         country: country,
//         location:location,
//     });

//     newchat.save()      
//     res.redirect("/listings");
// })
// OR We can do 
        const newListing = new Listing(req.body.listing);       // listing[] => title, desctiption ,price,country
        await newListing.save();
        res.redirect("/listings");
}));

//Edit Route
app.get("/listings/:id/edit",wrapAsync( async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
}));

//Update Route
app.put("/listings/:id",wrapAsync( async (req,res)=>{
    if(!req.body.listing){
        throw new ExpressError(404, "Send valid data for listing");
    }
    let { id } = req.params;
    Listing.findByIdAndUpdate(id, {...req.body.listing})
    res.render("/listings");
}));

//Delete Route
app.delete('/listings/:id',wrapAsync( async(req,res)=>{
    let { id } = req.params;
    let deletelisting = await Listing.findByIdAndDelete(id);
    console.log(deletelisting);
    res.redirect("/listings")
}));


app.get('/', (req, res) => {                                  // App root url
    res.send("root is working");
});

app.all('*',(req,res,next)=>{
    next( new ExpressError(404,'page Not found'))             // Create custom error for new page 
});

app.use(( err,req,res,next )=>{                               // Middleware create for custome error handler for try-catch / wrapAsync 
    let{statusCode = 500, message = 'Something went wrong!' } = err;
    res.status(statusCode).send(message);
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