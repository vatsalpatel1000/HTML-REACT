const express = require('express');
const router = express.Router({mergeParams: true});     // mergeParams: true => use parent router data to use in child through callback      // express.Router => use for restructure the app.js file
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require('../utils/ExpressError.js');
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview , isLoggedIn, isreviewAuthor} = require("../middleware.js");



// Reviews
// Post Review Route
router.post('/',isLoggedIn, validateReview , wrapAsync(async (req,res) => {
    console.log(req.params.id);
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.boy.review);
    newReview.auther = req.user._id;
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    req.flash("success","New Review Created");                      // flash msg createn for new review created
    res.redirect(`/listings/${listing_id}`)
}));

//Delete Review route
router.delete('/:reviewId',isreviewAuthor, wrapAsync(async(req,res)=>{
    let { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, { $pull: {reviews: reviewId }});       // Pull = DELETE
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","review Delete");                      // flash msg createn for delete review
    res.redirect(`/listings/${id}`);
}));

module.exports = router;