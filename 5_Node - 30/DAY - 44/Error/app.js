const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

app.get("/err", (req,res)=>{
    abcd = abcd; 
})

app.use((err,req,res,next)=>{
    console.log("-----Error------")
    next(err);          // call error handling middleware
});

app.use((err,req,res,next)=>{
    console.log("----error2 middleware-----")
    next(err);          // call error handling middleware
});


// Custome Error
const checktoken = ('/api',(req, res, next)=>{                          // middleware authentication key for /api route access
    let { token } = req.query;
    if (token === "giveaccess"){
        next();
    }
    // res.send("Access Denied");
    throw new ExpressError(401,"Access Denied");                                   // Create own new error 
});

app.get('/api',checktoken ,(req,res)=>{
    res.send("data");
});


// Default status and Message
app.get('/err',(erq,res)=>{
    abcd = abcd;
    next(err);
});

app.use((err,req,res, next)=>{
    let { status = 500, message = "some error Occured"}= err;           // if error status is not occur than we have to give error status code from extract "err"
    res.status(status).send(message);
}); 


//Activity
app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Acces is forbidden");                   // Activity => create error status code with its route message error will show in console
})



// Handling Async errror
app.get("/chat/:id/edit", async (req, res,next) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if(!chat){
        return next(new ExpressError(404,"Page not found"))             // if route / page is not there than this error will show  but in async function error  will pass with next function 
    }
    res.render("chat/edit.ejs", { listing });
});

app.use((err,req,res, next)=>{
    let { status = 500, message = "some error Occured"}= err;           
    res.status(status).send(message);
});


//Handling Async errror using try-catch
app.post("/chat",async(req,res)=>{
    try{    
        let {title,description, image, price, country,location} = req.body;
        let newchat = new Chat({
            title : title,
            description : description,
            image:image,
        });
    
        await newchat.save()      
        res.redirect("/chat");
    }catch(err){
        next(err);
    }
});

app.use((err,req,res, next)=>{
    let { status = 500, message = "some error Occured"}= err;           
    res.status(status).send(message);
}); 


// Using wrap Async
app.get("/chat/:id/edit", asyncWrap( async (req, res,next) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if(!chat){
        return next(new ExpressError(404,"Page not found"))         
    }
    res.render("chat/edit.ejs", { chat });
}));

function asyncWrap(fn){
    return function (req,res,next){
        fn(req,res,next).catch((err)=>next(err));
    };
}

app.use((err,req,res, next)=>{
    let { status = 500, message = "some error Occured"}= err;           
    res.status(status).send(message);
}); 


// Mongoose Validation error

const handleValidationErr = (err) =>{
    console.log("This was a Validation error. Please follow rules");
    console.dir(err.message);
    return err;
}

app.use((err,req,res,next)=>{
    console.log(err.name);
    if(err.name == 'ValidationError'){
        err = handleValidationErr(err);
    }
    next(err);
});