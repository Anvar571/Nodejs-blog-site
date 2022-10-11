const BlogModel = require("../models/BlogModel")
const Validation = require("../modules/validation")

module.exports = class BlogController {
    static async BlogGetController(req, res) {
        try {
            const newPost = await BlogModel.find({})
            // console.log(newPost);
            res.render("blog", {username: req.user?.username, posts: newPost})
        } catch (error) {
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