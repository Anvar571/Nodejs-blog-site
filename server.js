require("dotenv").config()

const express = require("express");
const connectMongodb = require("./models/mongodb");
const routers = require("./routes/Routers");
const cookieParser = require("cookie-parser");
const app = express();


// middleware express
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`);
})

app.set("view engine", "pug")


const server = async (req, res) => {
    try {
        const db = await connectMongodb()
    } catch (error) {
        console.log(error+"");
    } finally {
        app.use("/", routers)
    }
}

server()