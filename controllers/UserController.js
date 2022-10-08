module.exports = class UserController {
    static async UserGetController(req, res) {
        try {
            res.render("register", {message: "Register page"})
        } catch (error) {
            res.status(404).render("register", {message: "Register page"})
        }
    }

    static async UserPostController(req, res) {
        try {
            res.render("register", {message: "register"})
        } catch (error) {
            
        }
    }
}