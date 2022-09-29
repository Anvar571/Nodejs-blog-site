const router = require("express").Router();

router.post("/", (req, res) => {
    res.render("register")
})

module.exports = router