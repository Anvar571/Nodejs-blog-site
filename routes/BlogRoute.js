const { BlogGetController } = require("../controllers/BlogController");
const { checkMiddleware } = require("../middlewares/Middleware");

const router = require("express").Router();

router.get("/", checkMiddleware, BlogGetController);

// router.put("/",)

module.exports = router
