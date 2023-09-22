//<%  %> for javascript
//<%=Variable  %> for html
//<%- include %> for html with escape
//<%# comment %> for comments

const express = require("express");
const path=require("path");
const app = express();
app.set("view engine","ejs");
//app.set("views",path.join(__dirname,"views"));
app.use(express.static("public"));
app.get("/",(req,res)=>{
    //res.sendFile(path.join(__dirname+"/public/home.html"));
    res.render("home",{name:"Ankur",courses:["C++","Java","Python"]});
});
app.listen(3000,()=>{
    console.log("server started");
});