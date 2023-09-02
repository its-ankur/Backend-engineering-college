const express=require("express")
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("Order Home page");
});

router.get("/details/:data",(req,res)=>{
    res.send("Order details page "+req.params.data);
});

router.get("/history",(req,res)=>{
    res.send("Order history page");
});

module.exports=router;