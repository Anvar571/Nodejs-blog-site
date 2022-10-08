const { UserGetController, UserPostController } = require("../controllers/UserController");

const router = require("express").Router();

router.get("/register", UserGetController)

router.post("/register", UserPostController)

module.exports = router