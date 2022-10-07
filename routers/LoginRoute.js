const { LoginPostController } = require("../controllers/LoginController");

const router = require("express").Router();

router.use("/login", LoginPostController)

module.exports = router
