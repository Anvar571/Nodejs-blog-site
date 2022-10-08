const { BlogGetController, BlogPostController } = require("../controllers/BlogController");

const router = require("express").Router();

router.get("/", BlogGetController)

router.post("/", )

module.exports = router