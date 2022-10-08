const BlogModel = require("../models/BlogModel")
const Validation = require("../modules/validation")

module.exports = class BlogController {
    static async BlogGetController(req, res) {
        try {
            res.render("blog", {title: "blog | page"})
        } catch (error) {
        }
    }

    static async BlogPostController(req, res) {
        try {
            
        } catch (error) {
            
        }
    }
}