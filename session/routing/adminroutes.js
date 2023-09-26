const express=require("express");
const router=express.Router();
router.get("/",(req,res)=>{
    res.send("Admin products");
})

module.exports=router;
