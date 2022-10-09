const UserModel = require("../models/UserModel")
const { checkToken } = require("../modules/jwt")

module.exports = class Profile {
    static async ProfileCon(req, res) {
        try {
            const token = await req.cookies?.token
            if (token){
                const data = await checkToken(token)
                const user = await UserModel.findOne({email: data})
                res.render("profile", {username: user.username})
            }
        } catch (error) {
            res.render("profile", {error_message: error+""})
        }
    }
}