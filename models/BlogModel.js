const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    blog_id: Number,
    blogtitle: String,
    blogphoto: String,
    blogdescription: String,
    blogDate: Number,
    blogTime: Number,
})

module.exports = mongoose.model("blogs", blogSchema)