const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Chat = require('./models/chat.js')
// const { faker } = require("@faker-js/faker");
const path = require("path");
// const methodOverride = require("method-override");
// const { v4: uuidv4 } = require("uuid");
const port = 8080


//app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));






app.get('/', (req, res) => 
    res.send('Hello World!'))

app.listen(port, () =>
     console.log(`Example app listening on port ${port}!`))

app.get('/',(req,res)=>{
    
})