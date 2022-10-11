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
                blog_id: new Date().getTime(),
                blogtitle: blogtitle,
                blogphoto: blogphoto,
                blogdescription: blogdescription,
            })
            req.newPost = newPost
            newPost.save((err, data)=>{
                if (err)
                    return res.render("blogWriter", {username: req.user?.username, error})
                res.render("blog", {username: req.user?.username})
                
            })
        } catch (error) {
            res.render("blogWrite", {username: req.user?.username, error_message: error})
        }
    }
}