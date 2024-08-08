const express = require('express');
const router = express.Router({mergeParams: true});     // mergeParams: true => use parent router data to use in child through callback      // express.Router => use for restructure the app.js file
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require('../utils/ExpressError.js');
const {reviewSchema } = require('../schema.js');
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

const validateReview = ( req, res, next ) =>{
    let {error} = reviewSchema.validate(req.body);                      // Server side validation using joi  
    console.log(error);
    if(error){
        let errMsg = error.details.map((el) => el.message ).join(",");
        throw new ExpressError(400, errMsg );
    }else{
        next();
    }
} 

// Reviews
// Post Review Route
router.post('/',validateReview , wrapAsync(async (req,res) => {
    console.log(req.params.id);
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.boy.review);

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    res.redirect(`/listings/${listing_id}`)
}));

//Delete Review route
router.delete('/:reviewId',wrapAsync(async(req,res)=>{
    let { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, { $pull: {reviews: reviewId }});       // Pull = DELETE
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/listings/${id}`);
}));

module.exports = router;