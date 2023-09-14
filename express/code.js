const express = require("express");
const app = express();
app.use(express.static("."));
const orderRouter= require("./routes/orderRoute");
const rootRoute=require("./routes/rootRoute")
app.use("/orders", orderRouter);
app.use("/",rootRoute);
app.get("/", (req, res) => {
    res.send("Welcome to express server ...");
});

// app.get("/orders/",(req,res)=>{
//     res.send("Welcome to orders page ...");
// });

// app.get("/listTasks",(req,res)=>{
//     res.send("List tasks end point handled");
// });

app.listen(3000, () => {
    console.log("server is running on port 3000");
});