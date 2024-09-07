const express = require("express");
const router = express.Router();  
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport")
const {saveRedirectUrl} = require("../middleware.js");

router.get('/signup',async (req,res) => {
    res.send("form");
});

router.post('/signup',wrapAsync(async(req,res)=>{
    try{
    let{username, email, password} = req.body;
    const newUser = new User({email, username});
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    req.login(registeredUser, (err) => {
        if(err){
            return next(err);
        }
        req.flash("success","Welcome to wanderlust");
        res.redirect("/listings");
    });
    }catch(error){
        req.flash("error",error.message);                   // error message in flash
        res.redirect("/signup");
    }
}));

router.get('/login',async(req,res)=>{
    res.render("user/login.ejs");
});

router.post('/login', saveRedirectUrl, passport.authenticate("local",{failureRedirect : "/login",failureFlash : true }), async(req,res)=>{
    req.flash('success',"Welcome to wanderlust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
});

router.get("/logout", (req, res, next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","you are logged out!");
        res.redirect("/listings");
    })
})

module.exports = router;