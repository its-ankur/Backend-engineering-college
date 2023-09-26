const express=require("express");
const router=express.Router();
router.get("/dashboard",(req,res)=>{
    //res.send("Admin products");
    res.render("dashboard",{name:req.session.username});
});

module.exports=router;
