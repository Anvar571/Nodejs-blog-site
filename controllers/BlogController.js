const BlogModel = require("../models/BlogModel")
const Validation = require("../modules/validation")

module.exports = class BlogController {
    static async BlogGetController(req, res) {
        try {
            const newPost = await BlogModel.find({
                bloguser: req.user.username
            })
            res.render("blog", {username: req.user?.username, posts: newPost})
        } catch (error) {
            res.render("blog", {username: req.user?.username, error_message: error})
        }
    }

    static async BlogUpdateController(req, res) {
        try {
            // update-btn id bilan bazadagi id solishtirib kiyin shu idigi malumotlarni blogWritega jo'natish
        } catch (error) {
            console.log(error+"");
        }
    }
}