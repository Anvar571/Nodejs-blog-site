const BlogModel = require("../models/BlogModel")
const Validation = require("../modules/validation")

module.exports = class BlogWriteCon{
    static async BlogGetCon(req, res) {
        res.render("blogWrite")
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
            res.render("blog", {blog_title: blogtitle, blog_link: blogphoto, blog_description: blogdescription})
            // res.render("blogWrite", {success_message: "Seccessfully post created"})
        } catch (error) {
            res.render("blogWrite", {error_message: error})
        }
    }
}