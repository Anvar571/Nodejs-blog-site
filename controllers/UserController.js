const UserModel = require("../models/UserModel")
const { createCrypt } = require("../modules/bcrypt")
const { createToken } = require("../modules/jwt")
const Validation = require("../modules/validation")

module.exports = class UserController {
    static async UserGetController(req, res) {
        try {
            res.render("register", {username: req?.user?.username, title: "Register page"})
        } catch (error) {
            res.status(404).render("register", {message: "Register page"})
        }
    }

    static async UserPostController(req, res) {
        try {
            const {username, email, password} = await Validation.UserRegisterValidation(req.body)
            const checkEmail = await UserModel.findOne({
                email: email
            })
            if (checkEmail)
                return res.render("register", {error_message: "Email is already registered"})
            const hashPassword = await createCrypt(password)
            const user = await new UserModel({
                username: username,
                email: email,
                password: hashPassword
            })
            
            user.save()
            res.redirect("/users/login")
        } catch (error) {
            res.render("register", {error_message: "User registration error check email end password"})
        }
    }
}