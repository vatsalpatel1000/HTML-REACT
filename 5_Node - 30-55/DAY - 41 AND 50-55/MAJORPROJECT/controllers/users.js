const User = require ("../models/user")

module.exports.renderSignupForm = (req,res) => {
    res.render("users/signup.ejs");
}

module.exports.rendersignupForm = async(req,res)=>{
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
};

module.exports.renderloginForm = (req,res)=>{
    res.render("user/login.ejs");
}

module.exports.login =  async(req,res)=>{
    req.flash('success',"Welcome to wanderlust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";        // Home page not found 
    res.redirect(redirectUrl);                              // redirectUrl
}

module.exports.logout =  (req, res, next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","you are logged out!");
        res.redirect("/listings");
    })
}