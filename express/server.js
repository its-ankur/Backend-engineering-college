const express = require("express");
const path = require("path");
//variable,function,object,class
//express object 1 default function

const app = express();

app.use(express.static("."));
app.use(express.urlencoded({ extended: true })); //for post data
app.get("/getdata", (req, res) => {
    //res.send("Welcome to getdata page ...");
    console.log(req.query);
    //res.send(req.query);
    res.send("Welcome " + req.query.username);
});

app.post("/postdata", (req, res) => {
    console.log(req.body);
    res.send("Welcome " + req.body.username);
});


// app.get("/",(req,res)=>{    //request,response
//     res.send("Welcome to express server ...");
// });
// app.get("/index.html",(req,res)=>{    //request,response
//     //res.send("Welcome to index page ...");
//     res.sendFile(path.join(__dirname,"index.html"));
// });
app.get("*", (req, res) => {
    res.status(404).sendFile(path.join(__dirname, "public/404.html"));
});
app.listen(3000, () => {
    console.log("server is running on port 3000");
});