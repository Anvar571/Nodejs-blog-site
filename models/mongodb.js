const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect("")
    mongoose.connection.on("open", () => {
        console.log("Mongodb connection");
    })

    mongoose.connection.on('error', (err) => {
        console.log("Mongodb not connection", err);
    })
}