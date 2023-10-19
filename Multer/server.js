const express = require("express");
const multer = require("multer");
const app = express();
const path = require("path");
const fs = require("fs");
app.use(express.static("public"));
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/files");
    },
    filename: (req, file, cb) => {
        let ext = file.minetype.split("/")[1];
        cb(null, req.session.username + "." + ext);
    }
});
function test(req, file, cb) {
    let ext = file.minetype.split("/")[1];
    if (ext == "jpeg" || ext == "jpg")
        cb(null, true);
    else
        cb(new Error("File type is not supported"), false);
}
const upload = multer({ storage: storage, fileFilter: test,limits:{fileSize:1000000} });
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/form.html"));
});
app.post("/upload", upload.single("pic"), (req, res) => {
    res.end("File uploaded");
});
app.listen(3000, () => {
    console.log("Server started");
});