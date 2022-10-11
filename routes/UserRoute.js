const { UserGetController, UserPostController } = require("../controllers/UserController");
const { checkMiddlewareUser } = require("../middlewares/Middleware");

const router = require("express").Router();

router.get("/register", checkMiddlewareUser,UserGetController)

router.post("/register", checkMiddlewareUser, UserPostController)

module.exports = router