const Listing = require("./models/listing");
const Review = require("./models/review");
const { listingSchema, reviewSchema } = require('./schema.js');
const ExpressError = require('./utils/ExpressError.js');


module.exports.isLoggedIn = (req, res, next) => {
    // console.log(req.path, "..", req.originalUrl);               // it give current hit and origanl url before login
    if(!req.isAuthenticated()){                                    // If User is not register
        //redirectUrl save
        req.session.redirectUrl = req.originalUrl;                 // In req we have session obj where all req data stored related to session in this we will create new parameter and in that parameter store req.originalUrl (That is url before the login)
        req.flash("error","you must be logged in to create listing!");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req,res,next) => {
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;           // save req.session.redirectUrl to locals bcz that login passport will delete redirectUrl which we have create to goto same url after login but passport cant delete locals data
    }
    next();
};

module.exports.isOwner = async (req,res,next) => {
    let { id } = req.params;
        let listing =  await Listing.findById(id);
        if(!listing.owner.equals(res.locals.currUser._id)){
            req.flash("error","You are not the owner of this listing!");
            return res.redirect(`/listings/${id}`);
        }
        next();
}

module.exports.validateListing = ( req, res, next ) =>{
    let {error} = listingSchema.validate(req.body);                      // Server side validation using joi  
    console.log(error);
    if(error){
        let errMsg = error.details.map((el) => el.message ).join(",");
        throw new ExpressError(400, errMsg );
    }else{
        next();
    }
} 


module.exports.validateReview = ( req, res, next ) =>{
    let {error} = reviewSchema.validate(req.body);                      // Server side validation using joi  
    console.log(error);
    if(error){
        let errMsg = error.details.map((el) => el.message ).join(",");
        throw new ExpressError(400, errMsg );
    }else{
        next();
    }
} 

module.exports.isreviewAuthor = async (req,res,next) => {
    let { id , reviewId } = req.params;
        let review =  await Review.findById(reviewid);
        if(!review.owner.equals(res.locals.currUser._id)){
            req.flash("error","You are not the author of this listing!");
            return res.redirect(`/listings/${id}`);
        }
        next();
}