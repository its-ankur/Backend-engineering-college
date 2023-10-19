const express=require("express");
const multer=require("multer");
const app=express();
const port=3000;
const fs=require("fs");
const path=require("path");
const upload=multer({dest:"uploads/"});

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.static("uploads"));
app.use(express.json());

app.post('/',upload.single("file"),(req,res)=>{
    console.log(req.file);
    console.log(req.body);
    // const oldPath=path.join(__dirname,req.file.path);
    // const newPath=path.join(__dirname,"uploads",req.file.originalname);
    // fs.rename(oldPath,newPath,(err)=>{
    //     if(err) throw err;
    //     res.send("File uploaded successfully");
    // });
    fs.readFileSync(__dirname + '/public/data.txt',"utf-8",function(err,data) {
        let dataStored;
        let imgurl;
        if(err){
            console.log(err);
            return res.send("Error");
        }
        else{
            if(data.length===0){
                dataStored=[];
            }
        }
    });
});