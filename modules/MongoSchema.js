const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userData = new Schema({
    username: String,
    password: String,
    email: {
        type: String,
        unique: true
    }
})
const Users = mongoose.model("users", userData)

const findUser = (data) => {
    Users.findOne({email: data.email}, (err, data) => {
        if (data)
            return err
    })
}

const s = findUser({username: "anvar", email: "anvar52@gmail.com"})

// module.exports = mongoose.model("users", findUser)
// module.exports = mongoose.model('users', userData)