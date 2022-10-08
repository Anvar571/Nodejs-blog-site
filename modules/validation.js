const Joi = require("joi")

module.exports = class Validation {
    static async UserRegisterValidation(data) {
        return Joi.object({
            username: Joi.string().required().min(4),
            email: Joi.string().required().email(),
            password: Joi.string().required()
        }).validateAsync(data)
    }
    
    static async UserLoginValidation(data) {
        return Joi.object({
            email: Joi.string().required().email(),
            password: Joi.string().required()
        }).validateAsync(data)
    }
}