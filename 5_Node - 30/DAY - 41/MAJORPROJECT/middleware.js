module.exports.isLoggedIn = (req, res, next) => {
    // console.log(req.path, "..", req.originalUrl);               // it give current hit and origanl url 
    if(!req.isAuthenticated()){
        //redirectUrl save
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","you must be logged in to create listing!");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req,res,next) =>{
    if(req.sessionredirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};