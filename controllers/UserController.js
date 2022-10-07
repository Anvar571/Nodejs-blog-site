const MongoModel = require("../models/MongoModel")
const Validation = require("../modules/validation")

module.exports = class UserController {
   static async UserRoutePostCon(req, res, next) {
    try {
        const Datas = await Validation.UserSignUpValidation(req.body)
        let data = await MongoModel.findOne({
            email: Datas.email
        })

        if (data)
            return res.json({ok: false, message: "Email is already registered"})
        const user = new MongoModel(Datas)
        user.save()
        res.json({
            ok: true,
            message: "User registered successfull"
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            message: error + ""
        })    
    }
    }

}