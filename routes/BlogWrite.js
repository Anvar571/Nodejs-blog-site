const { BlogGetCon, BlogPostCon } = require("../controllers/BlogWriteCon");
const { checkMiddleware } = require("../middlewares/Middleware");

const router = require("express").Router();

router.get("/", checkMiddleware, BlogGetCon)
router.post("/", checkMiddleware, BlogPostCon)

module.exports = router