const Joi = require("joi")

module.exports = class Validation {
    static UserSignUpValidation(data) {
        return Joi.object({
            username: Joi.string().required().min(4),
            email: Joi.string().email().required().error(new Error("Email is invalid")),
            password: Joi.string().required(),
        }).validate(data)
    }
}