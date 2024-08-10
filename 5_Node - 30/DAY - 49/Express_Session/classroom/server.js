const express = require("express");
const app = express();
const session = require("express-session");

app.use(session({secret : "mysupersecretstring", resave : false , saveUninitialized : true }));        //  session as a middleware after that all request has their own session_id and value 
app.use(session(sessionOptions));

app.get("/register",(req,res)=>{
    let { name = "anonymous" } = req.query;
    res.session.name = name;
    res.redirect("/hello");
});

app.get("/hello",(req,res) =>{
    res.send(`hello,${req.session.name}`);
});

// app.get("/reqcount", (req, res) => {
//     if(req.session.count){
//         req.sessionm.count++;
//     }else{
//         req.session.count = 1;
//     }
//     req.sessiom.count = 1;
//     res.send(`you sent a request ${req.sessiom.count} times`);
// });



// app.get("/test", ( req, res) =>{
//         res.send("test sucessful");
// });

app.listen(3000, () => {
    console.log("server is listing to 3000");
});
