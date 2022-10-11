const { LoginGetController, LoginPostController } = require("../controllers/LoginController");
const { checkMiddlewareUser } = require("../middlewares/Middleware");

const router = require("express").Router();

router.get("/login", checkMiddlewareUser, LoginGetController)

router.post("/login", checkMiddlewareUser, LoginPostController)

module.exports = router