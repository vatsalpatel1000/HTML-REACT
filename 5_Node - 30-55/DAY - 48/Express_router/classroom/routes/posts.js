const express = require("express");
const router = express.Router();

//POSTS
//Index - posts
router.get('/',(req,res)=>{
    res.send("get for posts")
});

//Show - posts
router.get('/:id',(req,res)=>{
    res.send("post for posts")
});

//posts - posts
router.post('/',(req,res)=>{
    res.send("get for posts")
});

//Delete - posts
router.Delete('/:id',(req,res)=>{
    res.send("Delete user id ")
});

module.exports=router;