const express = require("express")
const router = express.Router();

router.get("/", (req, res) => {
    res.send("User Welcome page");
});

router.get("/details/:data", (req, res) => {
    res.send("Order details page " + req.params.data + " " + req.params.details);
});

router.get("/history", (req, res) => {
    res.send("User summary page");
});
router.get("/profile", (req, res) => {
    res.send("User profile page");
});
module.exports = router;