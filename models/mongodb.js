const mongoose = require("mongoose")
const url = process.env.MONGODB_URL

function connectMongo() {
    mongoose.connect(url)
    mongoose.connection.on('open', () => {
        console.log("database connection");
    })

    mongoose.connection.on("error", (err) => {
        console.log("database not connection", err);
    })
}

module.exports = connectMongo