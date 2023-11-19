const express=require('express');
const session=require('express-session');
const fs=require('fs');
const app=express();
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
const maxAge=1000*60*60*24;
app.use(session({
    saveUninitialized:true,
    resave:false,
    secret:"@@##!!",
    cookie:{
        maxAge:maxAge,
    }
}));
app.get('/signup',(req,res)=>{
    if(req.method=='GET'){
        if(req.session.count){
            req.session.count++;
        }
        else{
            req.session.count=1;
        }
        res.send('Invalid request method '+req.session.count);
    }
    else{
        res.sendFile(__dirname+'/public/signup.html');
    }
});

app.post('/signup',(req,res)=>{
    fs.readFile('./public/users.txt','utf-8',(err,data)=>{
        if(err) throw err;
        let user=JSON.parse(data);
        let obj={};
        obj.name=req.body.name;
        obj.gender=req.body.gender;
        obj.age=req.body.age;
        user.push(obj);
        fs.writeFile('./public/users.txt',JSON.stringify(user),(err)=>{
            if(err) throw err;
            console.log('Data saved successfully');
            res.redirect('/signup');
        });
    });
});
app.listen(3000,(err)=>{
    if(err) throw err;
    console.log('Server is running at port 3000');  
});