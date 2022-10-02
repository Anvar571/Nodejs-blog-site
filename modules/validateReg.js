const joi = require('joi');

const validateUser = (data) => {
    return joi.object({
        username: joi.string().required().min(4),
        password: joi.string().required().min(8),
        email: joi.string().required().email()
    }).validate(data)
}

module.exports = validateUser