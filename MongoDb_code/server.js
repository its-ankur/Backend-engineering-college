const express=require("express");
const app=express();
const client=require("mongodb").MongoClient;
app.set("view engine","ejs");
let dbinstance;
client.connect("mongodb+srv://ankur1037:Ankurqwerty2003@cluster0.apokfz1.mongodb.net/?retryWrites=true&w=majority").then((server)=>{
    dbinstance=server.db("Globe");
console.log("Connected to database");
}).catch((error)=>{
    console.log(error);
});

app.get("/getData",(req,res)=>{
    dbinstance.collection("students").find({}).toArray().then((data)=>{
        // console.log(data);
        // res.end();
        res.render("home",{students:data});
    });
});

app.get("/saveData",(req,res)=>{
    let obj={};
    obj.name=req.query.name;
    obj.age=req.query.age;
    dbinstance.collection("students").insertOne(obj).then((response)=>{
        res.redirect("/getData");
    });
});

// app.get("/delete",(req,res)=>{
//     dbinstance.collection("students").find({}).toArray().then((data)=>{
//         // console.log(data);
//         // res.end();
//         let find=data.filter((x=>x.id==req.query.id));
//         res.render("home",{students:data});
//     });
// });

///saveData?name=test&age=20

app.listen(3000,()=>{
    console.log("Server started at port 3000");
});