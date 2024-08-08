const express = require("express");
const app = express();
const users = require("./routes/users.js");
const posts = require("./routes/posts.js");

app.get("/",(req,res)=>{
    res.send("HI, i m root");
});

app.use("/users",users);
app.use("/posts",posts);

app.listen(3000,()=>{
    console.log("server is listing to 3000");
});