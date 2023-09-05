const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.static("."));
app.use(express.urlencoded({ extended: true }));

app.get("/alltasks", (req, res) => {
    fs.readFile("todo.txt", "utf8", (err, data) => {
        if (err) throw err;
        let record = JSON.parse(data);
        // let html = "<table border=1>";
        // html += "<tr><th>Title</th></tr>";
        // record.forEach((obj) => {
        //     html += "<tr><td>" + obj.title + "</td></tr>";
        // });
        // html += "</table>";
        res.send(record);
    });
});

app.post("/addtask", (req, res) => {
    fs.readFile("todo.txt", "utf8", (err, data) => {
        let record = JSON.parse(data);
        let obj = {};
        obj.title = req.body.title;
        record.push(obj);
        fs.writeFile("todo.txt", JSON.stringify(record), (err) => {
            if (err) throw err;
            res.send("Task added successfully");
        });
    });
});
app.listen(3000, () => {
    console.log("server is running on port 3000");
});