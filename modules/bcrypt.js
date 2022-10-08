const bcrypt = require('bcrypt')

module.exports.createCrypt = function createCrypt(password) {
    return bcrypt.hash(password, bcrypt.genSaltSync(10))
}

module.exports.compareCrypt = function compareCrypt(password, crypt) {
    return bcrypt.compareSync(password, crypt)
}
