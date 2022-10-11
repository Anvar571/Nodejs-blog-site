const { UpdateGetController, UpdatePostController } = require("../controllers/UpdateControllet");
const BlogModel = require("../models/BlogModel");

const router = require("express").Router();

router.get("/:id", UpdateGetController)

router.post("/:id", UpdatePostController)

module.exports = router