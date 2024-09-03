const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(_dir_name,"views"));                  // user for flash msg

app.use(session({secret : "mysupersecretstring", resave : false , saveUninitialized : true }));        //  session as a middleware after that all request has their own session_id and value 
app.use(flash());

app.use((req,res,next) =>{
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
});

app.get("/register",(req,res)=>{
    let { name = "anonymous" } = req.query;
    res.session.name = name;
    req.flash("success","user register succesfull");            // key and value to print flash msg
    if (name === "anonymous"){
        req.flsh("error","user not registered");
    }else{
        req.flash("success","user registered successfully!");
    }
    res.redirect("/hello");
});

app.get("/hello",(req,res) =>{
    // res.send(`hello,${req.session.name}`);
    res.render("page.ejs", { name : req.session.name, msg:req.flash("success") });
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
