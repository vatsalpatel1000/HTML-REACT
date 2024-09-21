const Review = require("../models/review");
const Listing = require("../models/listing");

module.exports.createReview = async (req,res) => {
    console.log(req.params.id);
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.boy.review);
    newReview.auther = req.user._id;
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    req.flash("success","New Review Created");                      // flash msg createn for new review created
    res.redirect(`/listings/${listing_id}`)
};


module.exports.destroyReview =  async(req,res)=>{
    let { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, { $pull: {reviews: reviewId }});       // Pull = DELETE
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","review Delete");                      // flash msg createn for delete review
    res.redirect(`/listings/${id}`);
}