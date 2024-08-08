const express = require("express");
const router = express.Router();                                        // express.Router use for restructure the app.js file 
const wrapAsync =require("../utils/wrapAsync.js");
const { listingSchema } = require('../schema.js');
const ExpressError = require('../utils/ExpressError.js');
const Listing = require("../models/listing.js");


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
router.get('/new',(req,res)=>{
    res.render("listings/new.ejs");
})

//Show Route
router.get('/:id',wrapAsync(async(req,res)=>{
    let {id} = req.params;
    const listing =  await Listing.findById(id).populate("reviews");
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
router.post("/",validateListing,wrapAsync( async(req,res,next)=>{                  // Create custome error handling for try-catch / wrapAsync 
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
            await newListing.save();
            res.redirect("/listings");
    }));
    
    //Edit Route
    router.get("/:id/edit",wrapAsync( async (req, res) => {
        let { id } = req.params;
        const listing = await Listing.findById(id);
        res.render("listings/edit.ejs", { listing });
    }));
    
    //Update Route
    router.put("/:id",validateListing,wrapAsync( async (req,res)=>{
        if(!req.body.listing){
            throw new ExpressError(404, "Send valid data for listing");
        }
        let { id } = req.params;
        Listing.findByIdAndUpdate(id, {...req.body.listing})
        res.render("/listings");
    }));
    
    //Delete Route
    router.delete('/:id',wrapAsync( async(req,res)=>{
        let { id } = req.params;
        let deletelisting = await Listing.findByIdAndDelete(id);
        console.log(deletelisting);
        res.redirect("/listings")
    }));
    
module.exports = router;