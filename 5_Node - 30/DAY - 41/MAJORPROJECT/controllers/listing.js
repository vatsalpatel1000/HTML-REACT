const Listing = require("../models/listing");

Module.exports.index =  async (req, res) => {
    try {
        const allListings = await Listing.find({});
        res.render("listings/index.ejs", { allListings });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};



Module.exports.renderNewForm =  (req,res)=>{
    res.render("listings/new.ejs");
}


Module.exports.showListing = async(req,res)=>{
    let {id} = req.params;
    const listing =  await Listing.findById(id).populate({path : "reviews",populate : {path : "auther",},}).populate("owner");
    if(!listing){                                                   // flash msg faliure if listing not exist
        req.flash("error","listing does not exist!");
        res.redirect("listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", {listing})
}

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


Module.exports.createListing  = async(req,res,next)=>{                  // Create custome error handling for try-catch / wrapAsync 
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
            console.log(req.user);
            newListing.owner= req.user.id;                          // show owner of property and vills
            await newListing.save();
            req.flash("success","New Listing Created!")             // flash msg created
            res.redirect("/listings");
    }


Module.exports.renderEditForm  = async (req, res) => {
        let { id } = req.params;
        const listing = await Listing.findById(id);
        if(!listing){                                                   // flash msg faliure if listing not exist
            req.flash("error","listing does not exist!");
            res.redirect("/listings");
        }
        res.render("listings/edit.ejs", { listing });
    }
    

    
Module.exports.updateListing  =  async (req,res)=>{
        if(!req.body.listing){
            throw new ExpressError(404, "Send valid data for listing");
        }
        let { id } = req.params;
        await Listing.findByIdAndUpdate(id, {...req.body.listing});
        req.flash("success","Listing Update");                      // flash msg createn for update listing
        res.redirect(`/listings/${id}`);
    }


    Module.exports.destroyListing  = async(req,res)=>{
        let { id } = req.params;
            let deletelisting = await Listing.findByIdAndDelete(id);
            console.log(deletelisting);
            req.flash("success","Listing Delete");                      // flash msg createn for delete listing               
            res.redirect("/listings")
        }