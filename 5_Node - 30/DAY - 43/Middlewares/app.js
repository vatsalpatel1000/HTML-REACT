const express = require("express");
const app = express();

// app.use((req,res,next)=>{
//     console.log("Hi i m middleware");
//     next();
// });

//logger custome middleware - morgan            => get the info abput request
app.use((req,res,next)=>{
    req.time = new Date(Date.now()).toString();
    console.log(req.method, req.hostname,  req.pathname, req.time );
    next();
});

app.use('/',(req, res)=>{
    res.send("Hi i m middleware3");
});

app.use('/random',(req, res)=>{
    res.send("this is a random page ");
});

app.use((req,res)=>{
    res.send(404).send("Page not found error 404");        // when route is not there an page npt found  
});

app.listen(8000,()=>{
    console.log("server listing to port 8000");
});

// API Token as Query String
app.use('/api',(req, res, next)=>{                          // middleware authentication key for /api route access
    let {token } = req.query;
    if (token === "giveaccess"){
        next();
    }
    res.send("Access Denied");
});

app.get('/api',(req,res)=>{
    res.send("data");
})

// OR we can do this for AUTHERIZATION 
// Pass Multiple Middleware
const checktoken = ('/api',(req, res, next)=>{                          // middleware authentication key for /api route access
    let {token } = req.query;
    if (token === "giveaccess"){
        next();
    }
    // res.send("Access Denied");
    throw new error("Access Denied");                                   // Create own new error 
});

app.get('/api',checktoken ,(req,res)=>{
    res.send("data");
})


// Handing Error
