const { UserRoutePostCon } = require("../controllers/UserController");

const router = require("express").Router();

router.post("/signup", UserRoutePostCon);

module.exports = router;