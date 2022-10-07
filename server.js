require("dotenv").config()
const express = require("express")
const connectMongo = require("./models/mongodb")
const routers = require("./routers/routers")
const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server listen on port ${PORT}`);
})

// midlewares express
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const server =async () => {
    const db = await connectMongo();
    app.use((req, res, next)=> {
        req.db = db;
        next()
    })
    app.use("/", routers)
}

server()