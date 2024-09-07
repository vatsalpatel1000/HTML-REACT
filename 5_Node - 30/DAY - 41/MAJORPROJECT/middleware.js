const Listing = require("./models/listing");
const Review = require("./models/review");
const { listingSchema, reviewSchema } = require('./schema.js');
const ExpressError = require('./utils/ExpressError.js');


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

module.exports.saveRedirectUrl = (req,res,next) => {
    if(req.sessionredirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
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