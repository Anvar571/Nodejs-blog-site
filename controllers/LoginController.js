const UserModel = require("../models/UserModel");
const { compareCrypt } = require("../modules/bcrypt");
const { createToken } = require("../modules/jwt");
const Validation = require("../modules/validation")

module.exports = class LoginController {
    static async LoginGetController(req, res) {
        try {
            res.render("login", {title: "Login page"})
        } catch (error) {
            res.render("login", {error_message: error})
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

            const token = await createToken(email)
            
            if (!user)
                return res.render("login", {error_message: "Find not user"})
            
            res.cookie('token', token).redirect("/users/profile")
        } catch (error) {
            res.render("login", {error_message: error+""})
        }
    }
}