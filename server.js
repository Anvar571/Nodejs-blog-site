require("dotenv").config()
const express = require("express")
const connectMongo = require("./models/mongodb")
const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server listen on port ${PORT}`);
})

const server = () => {
    const db = connectMongo();
    app.use((req, res, next)=> {
        req.db = db;
        next()
    })
}

server()