const { BlogGetCon, BlogPostCon } = require("../controllers/BlogWriteCon");

const router = require("express").Router();

router.get("/", BlogGetCon)
router.post("/", BlogPostCon)

module.exports = router