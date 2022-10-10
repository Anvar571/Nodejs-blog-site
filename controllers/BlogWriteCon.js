const BlogModel = require("../models/BlogModel")
const Validation = require("../modules/validation")

module.exports = class BlogWriteCon{
    static async BlogGetCon(req, res) {
        res.render("blogWrite", {username: req.user?.username})
    }

    static async BlogPostCon(req, res) {
        try {
            const {blogtitle, blogphoto, blogdescription} = await Validation.BlogValidation(req.body)
            const newPost = new BlogModel({
                blogtitle,
                blogphoto,
                blogdescription,
            })
            newPost.save()
            req.blogs = {
                blogtitle,
                blogphoto,
                blogdescription
            }
            console.log(req.blogs);
            res.render("blog", {username: req.user?.username, blogAll: req.blogs})
        } catch (error) {
            res.render("blogWrite", {error_message: error})
        }
    }
}