const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    blog_id: String,
    blog_title: String,
    blog_description: String,
    blog_photo: String,
})

module.exports = mongoose.model("blogs", blogSchema)