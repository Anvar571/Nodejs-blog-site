const MongoModel = require("../models/MongoModel")
const Validation = require("../modules/validation")

module.exports = class LoginController {
    static async LoginPostController(req, res, next) {
        try {
            const {email, password} = await Validation.UserLoginValidation(req.body)
            const checkEmail = await MongoModel.findOne({
                email: email
            })

            const checkPassword = await MongoModel.findOne({
                password: password
            })

            if (checkEmail || checkPassword) {
                return res.json({
                    ok: true,
                    message: "logined user successfull"
                })
            }else {
                return res.json({
                    ok: false,
                    message: "email or password error"
                })
            }
        } catch (error) {
            res.json({
                ok: false,
                message: error + ""
            })
        }
    }
}