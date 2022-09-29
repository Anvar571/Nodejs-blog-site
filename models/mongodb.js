const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect("mongodb://localhost:27017/blog")
    mongoose.connection.on("open", () => {
        console.log("Mongodb connection");
    })

    mongoose.connection.on('error', (err) => {
        console.log("Mongodb not connection", err);
    })
}