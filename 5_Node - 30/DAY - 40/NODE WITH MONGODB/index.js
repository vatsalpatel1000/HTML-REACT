const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat.js');
const methodOverride = require("method-override");


const app = express();
const port = 8080;

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect('mongodb://127.0.0.1:27017/whatsapp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connection successful"))
    .catch((err) => console.log(err));

//Index Route 
app.get('/chats', async (req, res) => {
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
});

//New Route
app.get('/chats/new',(req,res)=>{
    res.render("new.ejs");
})

//Create Route
app.post('/chats',(req,res)=>{
    let {from , to , msg }=req.body
    let newChat = new Chat({
        from : from,
        to : to,
        msg : msg,
        created_at : new Date()
    });
    newChat.save()      // save to DBS
    .then((res)=>{
        console.log("chat was saved")
    })
    .catch((err) => {
        console.log(err)
    })
    res.redirect("/chats");
});

//Edit Route
app.get('/chats/:id/edit',async(req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{ chat });
})

//Update Route
app.put('/chats/:id',async(req,res)=>{
    let {id} = req.params;
    let {msg : newmsg} = req.body;
    let updateChat = await Chat.findByIdAndUpdate(id,{msg : newmsg},{runValidators:true},{new : true})
    console.log("updated chat");
    res.redirect("/chats");
})

//DELETE Route
app.delete('/chats/:id', async(req,res)=>{
    let{ id } = req.params;
    let DeletedcChat = await Chat.findByIdAndDelete(id);
    console.log(DeletedcChat);
    res.redirect("/chats");
})

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});

app.get('/', (req, res) => {
    res.send("root is working");
});
