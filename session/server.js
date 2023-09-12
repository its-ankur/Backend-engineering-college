const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
app.use(express.static('public'));
const cookieParser = require('cookie-parser');
const session = require('express-session');
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const oneday = 1000 * 60 * 60 * 24;
app.use(session({
    saveUninitialized: true,
    resave: false,
    secret: 'SECRET',
    cookie: { maxAge: oneday }
}));

app.get("/dashboard", (req, res) => {
    if (req.session.user) {
        res.sendFile(path.join(__dirname, "public/dashboard.html"));
    }
    else {
        res.redirect("/");
    }
});
app.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
});
app.post("/login", (req, res) => {
    let data = fs.readFileSync("public/user.txt", "utf8");
    let users = JSON.parse(data);
    let user = users.find(u => u.name == req.body.name && u.password == req.body.password);
    if (user) {
        //res.send("Welcome " + user.name);
        req.session.user = user;
        res.redirect("/dashboard");
    } else {
        res.send("Invalid username or password");
    }
    //res.redirect("/dashboard");
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});