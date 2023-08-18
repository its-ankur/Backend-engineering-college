const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    const data = req.url;
    let filename = "";
    if (req.url == "/")
        filename = "index.html";
    else
        filename = data.substr(1);
    res.end(readFile(filename));
});



server.listen(3000, (err) => {
    if (err)
        console.log("Unable to start server");
    else
        console.log("Server started");
});

function readFile(filename) {
    try{
    return fs.readFileSync(filename, "utf-8");
    }
    catch(err){
        return "File not found";
    }
}