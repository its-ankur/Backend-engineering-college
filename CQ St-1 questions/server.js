const express=require("express");
const app=express();
app.get('/find/:name/:age',(req,res)=>{
    res.send({"name":req.params.name,"age":req.params.age});
})