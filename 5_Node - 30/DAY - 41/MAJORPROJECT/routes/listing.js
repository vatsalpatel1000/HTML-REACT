const express = require("express");
const router = express.Router();                                        // express.Router use for restructure the app.js file 
const wrapAsync =require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner,validateListing } = require("../middleware.js")
const multer = require ("multer");                                      // it is used for media upload
const {storage} = require("../cloudconfig.js")
const upload = multer({storage});                              //  multer create automatic upload folder 

const listingController = require("../controllers/listing.js")

router.route("/")
    .get(wrapAsync(listingController.index))                                                    //Index Route
    .post(isLoggedIn, upload.single('listing[image]'), wrapAsync(listingController.createListing))               //Create Route
    // .post( (req,res ) => {res.send(req.file )})

//New Route
router.get('/new', isLoggedIn, listingController.renderNewForm);


router.route("/:id")
    .get( wrapAsync(listingController.showListing))                                             //Show Route
    .put( isLoggedIn,isOwner, validateListing,wrapAsync( listingController.updateListing))      //Update Route
    .delete(isLoggedIn,isOwner, wrapAsync( listingController.destroyListing));                  //Delete Route

//Index Route
// router.get("/",wrapAsync(listingController.index));

//New Route
// router.get('/new', isLoggedIn, listingController.renderNewForm);

//Show Route
// router.get('/:id',wrapAsync(listingController.showListing));

//Create Route
// router.post("/", isLoggedIn, validateListing,wrapAsync(listingController.createListing));

//Edit Route
router.get("/:id/edit", isLoggedIn,isOwner, wrapAsync( listingController.renderEditForm));

//Update Route
// router.put("/:id", isLoggedIn,isOwner, validateListing,wrapAsync( listingController.updateListing));

//Delete Route
// router.delete('/:id', isLoggedIn,isOwner, wrapAsync( listingController.destroyListing));

module.exports = router;