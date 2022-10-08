const UserModel = require("../models/UserModel");
const { compareCrypt } = require("../modules/bcrypt");
const Validation = require("../modules/validation")

module.exports = class LoginController {
    static async LoginGetController(req, res) {
        try {
            res.render("login", {title: "Login page"})
        } catch (error) {
            
        }
    }

    static async LoginPostController(req, res) {
        try {
            const {email, password} = await Validation.UserLoginValidation(req.body);

            const getByEmailPassword = await UserModel.aggregate([
                {
                    $match: {
                        email: email
                    }
                },
                {
                    $project: {
                        password: 1
                    }
                }
            ])

            const user = await compareCrypt(password, getByEmailPassword[0].password)
            if (user)
                res.redirect("/", {registered: "user registered successfully"})
            else {
                res.render("login", {error_message: "xatolik sodir bo'ldi qaytadan urinib ko'ring"})
            }
        } catch (error) {
            res.render("login", {error_message: error})
        }
    }
}