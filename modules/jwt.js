const {sign, verify} = require("jsonwebtoken")

module.exports.createToken = function createToken(data){
    return sign(data, process.env.SECRET_WORD)
}

module.exports.checkToken= function checkToken(token) {
    return verify(token, process.env.SECRET_WORD)
}