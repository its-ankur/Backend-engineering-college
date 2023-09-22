const express = require("express");
const fs = require("fs");
const path = require("path");
const cookieparser=require("cookie-parser");
const session = require("express-session");
const app = express();
const oneDay = 1000*60*60*24;
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));

app.use(cookieparser());
app.use(session({

    saveUnintalized:true,
    resave:false,
    secret:'as#$@&dfd$$',
    cookie:{maxAge:oneDay}
}))

//user routes//

const userroutes = require("./routing/userroutes");
app.use("/users",auth,userroutes);
function auth(req,res,next){
    if (req.session.username)
    next();
    else
    res.redirect("/");
}

//admin autherization//
const adminroutes = require("./routing/adminroutes");
app.use("/admin",testadmin,adminroutes);
function testadmin(req,res,next){
    if (req.session.username && req.session.role == "admin")
    next();
    else
    res.redirect("/");
}

// app.get("/profile",(req,res)=>{
//     if(req.session.username)
//     res.send("profile");
//     else
//     res.redirect("/");
// })

// app.get("/mypage",(req,res)=>{
//     if(req.session.username)
//     res.send("My Page");
//     else
//     res.redirect("/");
// })


// app.get("/dashboard",(req,res)=>{
//     if(req.session.username)
//     res.sendFile(path.join(__dirname,"./public/dashboard.html"));
//     else
//     res.redirect("/");
// })

// app.get("/logout",(req,res)=>{
//     req.session.destroy(); //removes all the data as well as session
//     res.redirect("/");
// })

app.post("/login",(req,res)=>{

    

    fs.readFile("users.txt",(err,data)=>{
        let record = JSON.parse(data);
        console.log(req.body);

        let result = record.filter((item)=>{
            if(req.body.username == item.username && req.body.password == item.password)
                return true;
        })
        if (result.length == 0)
            res.send("invalid username/password");
        else{
            req.session.username = req.body.username;
            req.session.role = result[0].role;
            res.redirect("/dashboard");
        }
            
            // res.send("welcome "+req.body.username);
    });   
})


app.listen(3000,(err)=>{
    if(!err)
    console.log("server started")
})