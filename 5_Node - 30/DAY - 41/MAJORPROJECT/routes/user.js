const express = require("express");
const router = express.Router();  
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport")

router.get('/signup',async (req,res) => {
    res.send("form");
});

router.post('/signup',wrapAsync(async(req,res)=>{
    try{
    let{username, email, password} = req.body;
    const newUser = new User({email, username});
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    req.flash("success","Welcome to wanderlust");
    res.redirect("/listings");
    }catch(error){
        req.flash("error",error.message);                   // error message in flash
        res.redirect("/signup");
    }
}));

router.get('/login',async(req,res)=>{
    res.render("user/login.ejs");
});

router.post('/login',passport.authenticate("local",{failureRedirect : "/login",failureFlash : true }), async(req,res)=>{
    req.flash('success',"Welcome to wanderlust! yout are logged in!");
    res.redirect("/listings");
});

module.exports = router;