const fs=require('fs');
const express=require('express');
const app=express();
//app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.send('Hello World');
});
app.get('/products',(req,res)=>{
    if(req.query.category){
        fs.readFile('./public/products.json',(err,data)=>{
            if(err){
                res.status(500).send('Something went wrong');
            }
            let products=JSON.parse(data);
            let filterProduct=products.filter((product)=>product.category===req.query.category);
            res.send(filterProduct);
           //console.log(filterProduct);
        });
    }
    //res.send("Please specify product to find");
});
app.get('/filterproducts',(req,res)=>{
    if(req.query.category){
        fs.readFile('./public/products.json',(err,data)=>{
            if(err){
                res.status(500).send('Something went wrong');
            }
            let products=JSON.parse(data);
            let filterProduct=products.filter((product)=>product.category===req.query.category && product.price==req.query.price);
            res.send(filterProduct);
        });
    }
    //res.send("Please specify product to find");
});
app.listen(3000,()=>{
    console.log('Server is up on port 3000');
});