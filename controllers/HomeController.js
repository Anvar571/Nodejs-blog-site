const BlogModel = require("../models/BlogModel")

module.exports = class HomeController {
    static async HomeGetController(req, res) {
        try {
            const posts = await BlogModel.find({})
            res.render("homePage", {username: req.user?.username, posts: posts})
        }
        catch (error) {
            res.render("homePage", {error_message: error+""})
        }
    }
}