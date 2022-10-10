
module.exports = class HomeController {
    static async HomeGetController(req, res) {
        try {
            res.render("homePage", {username: req.user?.username})
        }
        catch (error) {
            res.render("homePage", {error_message: error+""})
        }
    }
}