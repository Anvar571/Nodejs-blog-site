const routers = require("express").Router();

// site user register router
routers.use("/users", require("./UserRoute"))
routers.use("/users", require('./LoginRoute'))

// medlleware 

// site home router
routers.use("/", require("./HomeRoute"))
// site blog router
routers.use("/blog", require("./BlogRoute"))
routers.use("/blog/new", require("./BlogWrite"))

module.exports = routers