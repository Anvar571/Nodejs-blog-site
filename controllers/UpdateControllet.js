const BlogModel = require("../models/BlogModel");

async function UpdateGetController(req, res) {
    const postId = await req.params.id;
    const postData = await BlogModel.findById(postId)
    res.render("update", {username: req.user?.username, onePost: postData})
}

async function UpdatePostController(req, res) {
    const postId = await req.params.id;
    const {blogtitle, blogphoto, blogdesciription} = await req.body
    await BlogModel.findByIdAndUpdate(postId, {
        blogtitle,
        blogphoto,
        blogdesciription
    })
    res.redirect("/blog")
}

module.exports = {
    UpdateGetController,
    UpdatePostController
}