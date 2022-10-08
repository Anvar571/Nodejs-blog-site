const routers = require("express").Router();

routers.use("/", require("./HomeRoute"))
routers.use("/users", require("./UserRoute"))
routers.use("/users", require('./LoginRoute'))

module.exports = routers