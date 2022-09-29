const {LoginController} = require("../controllers/LoginController");

const router = require("express").Router();

router.get("/", LoginController)

module.exports = router