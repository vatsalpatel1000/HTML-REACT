const express = require('express')
const app = express()
const mongoose = require('mongoose')
// const { faker } = require("@faker-js/faker");
const path = require("path");
// const methodOverride = require("method-override");
// const { v4: uuidv4 } = require("uuid");
const port = 8080


//app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

main()
    .then((res)=>{
    console.log(res);
    console.log("connection successfull");
    })
    .catch((err) => {
        console.log(err)
    });

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.get('/', (req, res) => 
    res.send('Hello World!'))

app.listen(port, () =>
     console.log(`Example app listening on port ${port}!`))

app.get('/',(req,res)=>{
    
})