const express = require('express');
const router = express.Router({mergeParams: true});     // mergeParams: true => use parent router data to use in child through callback      // express.Router => use for restructure the app.js file
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require('../utils/ExpressError.js');
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview , isLoggedIn, isreviewAuthor} = require("../middleware.js");

const reviewController = require ("../controllers/review.js")

// Reviews
// Post Review Route
router.post('/',isLoggedIn, validateReview , wrapAsync(reviewController.createReview));

//Delete Review route
router.delete('/:reviewId',isreviewAuthor, wrapAsync(reviewController.destroy));

module.exports = router;