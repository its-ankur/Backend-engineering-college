const express=require("express");
const app=express();
const client=require("mongodb").MongoClient;
let dbinstance;
client.connect("mongodb://127.0.0.1:27017").then((server)=>{
    dbinstance=server.db("globe");
console.log("Connected to database");
}).catch((error)=>{
    console.log(error);
});

app.listen(3000,()=>{
    console.log("Server started at port 3000");
});