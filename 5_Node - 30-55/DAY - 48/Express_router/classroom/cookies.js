const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser("secretcode"));                // req.cookies for get cookies from browser // for signed cookies

app.get("/getsignedcookie",(req,res)=>{             // send signed cookies
    res.cookie("made-in","India",{signed : true});
    res.send("signed cookie sent");
});

app.get("/verify",(req,res)=>{                      // verify signed cookies
    console.log(req.cookies);                       // get normal cookies
    console.log(req.signedCookies);                 // get signed cookies if tempred than is will show null or false
    res.send("verified");
});

app.get("/getcookies",(req,res) => {
    res.cookie("greet","hello");                    // send cookies to browser
    res.cookie("madeIn","India");
    res.send("sent you some cookies!");
});

app.get("/",(req,res)=>{
    console.dir(req.cookies);    // directly we cant pass cookie from req we need cookie parser // get cookies from broser
    res.send("HI, i m root");
});

app.get("/geet", (req,res) => {
    let{name = "anonymous" } = req.cookie;      // in coockie if name is not exist than anonymous will print 
    res.send(`Hii, ${name}`);
});

app.listen(3000,()=>{
    console.log("server is listing to 3000");
});