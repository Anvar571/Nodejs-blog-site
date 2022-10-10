const UserModel = require("../models/UserModel")
const { checkToken } = require("../modules/jwt")

module.exports.AuthCheck = async function AuthCheck(req, res, next) {
    try {
        const token = await req.cookies?.token
        if (token){
            const email = await checkToken(token)
            const user = await UserModel.findOne({email: email})
            req.user = user
        }
        next()
    }catch(error) {
        console.log(error+"");
    }
}