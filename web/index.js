const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    //console.log(req.url);
    if (req.url == "/" || req.url == "/index.html") {
        fs.readFile("index.html", "utf-8", (err, data) => {
            res.end(data);
        });
    }
    else if (req.url == "/about.html") {
        fs.readFile("about.html", "utf-8", (err, data) => {
            res.end(data);
        });
    }
    else if(req.url=="/contactus.html"){
        fs.readFile("contactus.html","utf-8",(err,data)=>{
            res.end(data);
        });
    }
});
server.listen(3000, (err) => {
    if (err)
        console.log("Unable to start server");
    else
        console.log("Start");
});