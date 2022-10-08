module.exports = class HomeController {
    static async HomeGetController(req, res) {
        res.render("homePage")
    }
}