const BlogModel = require("../models/BlogModel");

const router = require("express").Router();

router.post('/:id', async (req, res) => {
    const postId = await req.params.id;
    await BlogModel.findByIdAndDelete(postId)
    res.redirect("/blog")
})

module.exports = router