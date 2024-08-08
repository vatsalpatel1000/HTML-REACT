const express = require("express");
const router = express.Router();

//USERS
//Index - users
router.get('/',(req,res)=>{
    res.send("get for users")
});

//Show - users
router.get('/:id',(req,res)=>{
    res.send("Post for users")
});

//post - users
router.post('/',(req,res)=>{
    res.send("get for users")
});

//Delete - users
router.Delete('/:id',(req,res)=>{
    res.send("Delete user id ")
});


module.exports=router;