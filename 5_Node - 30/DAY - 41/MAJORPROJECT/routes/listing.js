const express = require("express");
const router = express.Router();                                        // express.Router use for restructure the app.js file 
const wrapAsync =require("../utils/wrapAsync.js");
const { listingSchema } = require('../schema.js');
const ExpressError = require('../utils/ExpressError.js');
const Listing = require("../models/listing.js");
const {isLoggedIn} = require("../middleware.js")


const validateListing = ( req, res, next ) =>{
    let {error} = listingSchema.validate(req.body);                      // Server side validation using joi  
    console.log(error);
    if(error){
        let errMsg = error.details.map((el) => el.message ).join(",");
        throw new ExpressError(400, errMsg );
    }else{
        next();
    }
} 

//Index Route
router.get("/",wrapAsync( async (req, res) => {
    try {
        const allListings = await Listing.find({});
        res.render("listings/index.ejs", { allListings });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}));

//New Route
router.get('/new', isLoggedIn, (req,res)=>{
    res.render("listings/new.ejs");
});

//Show Route
router.get('/:id',wrapAsync(async(req,res)=>{
    let {id} = req.params;
    const listing =  await Listing.findById(id).populate("reviews").populate("owner");
    if(!listing){                                                   // flash msg faliure if listing not exist
        req.flash("error","listing does not exist!");
        res.redirect("listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", {listing})
}));


// router.get('/testListing', async(req,res)=>{
//     let sampleListing = new Listing({
//         title : "My New Villa",
//         description : "By the beach",
//         price : 1200,
//         location : "Calangute, Goa",
//         countary : "India",
//     });
//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("Successful testing")
// });


//Create Route
router.post("/", isLoggedIn, validateListing,wrapAsync( async(req,res,next)=>{                  // Create custome error handling for try-catch / wrapAsync 
    //     let {title,description, image, price, country,location} = req.body;
    //     let newchat = new Chat({
    //         title : title,
    //         description : description,
    //         image:image,
    //         price:price,
    //         country: country,
    //         location:location,
    //     });
    
    //     newchat.save()      
    //     res.redirect("/listings");
    // })
    // OR We can do 
            const newListing = new Listing(req.body.listing);       // listing[] => title, desctiption ,price,country
            newListing.owner= req.user.id;
            await newListing.save();
            req.flash("success","New Listing Created!")             // flash msg created
            res.redirect("/listings");
    }));
    
    //Edit Route
    router.get("/:id/edit", isLoggedIn, wrapAsync( async (req, res) => {
        let { id } = req.params;
        const listing = await Listing.findById(id);
        if(!listing){                                                   // flash msg faliure if listing not exist
            req.flash("error","listing does not exist!");
            res.redirect("/listings");
        }
        res.render("listings/edit.ejs", { listing });
    }));
    
    //Update Route
    router.put("/:id", isLoggedIn, validateListing,wrapAsync( async (req,res)=>{
        if(!req.body.listing){
            throw new ExpressError(404, "Send valid data for listing");
        }
        let { id } = req.params;
        Listing.findByIdAndUpdate(id, {...req.body.listing});
        req.flash("success","Listing Update");                      // flash msg createn for update listing
        res.render("/listings");
    }));
    
    //Delete Route
    router.delete('/:id', isLoggedIn, wrapAsync( async(req,res)=>{
        let { id } = req.params;
        let deletelisting = await Listing.findByIdAndDelete(id);
        console.log(deletelisting);
        req.flash("success","Listing Delete");                      // flash msg createn for delete listing               
        res.redirect("/listings")
    }));
    
module.exports = router;