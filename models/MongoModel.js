const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataMongoose = new Schema({
    username: String,
    email: String,
    password: String
})

module.exports = mongoose.model("users", dataMongoose)