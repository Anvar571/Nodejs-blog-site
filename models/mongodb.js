const mongoose = require('mongoose');
const url = process.env.MONGODB_URL

const connectMongodb = () => {
    mongoose.connect(url)

    mongoose.connection.on('open', () => {
        console.log("mongodb connection");
    })

    mongoose.connection.on('error', (err) => {
        console.log("mongodb error", err);
    })
}

module.exports = connectMongodb