const http = require("http");
const server = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/html")
    //console.log(req.url);
    if (req.url == "/") {
        res.write("Welcome to <b>node js</b> server");
        res.end();
    }
    else if (req.url == "/about") {
        res.write("Welcome to <b>about</b> server");
        res.end();
    }
    else {
        res.end();
    }
});
server.listen(3000);

// server.on("connection",(socket)=>{
//     console.log("Request received");
// });