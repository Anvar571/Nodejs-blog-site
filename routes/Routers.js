// const { checkAuth } = require("../modules/auth");

// const { AuthCheck } = require("../middlewares/AuthCheck");

const routers = require("express").Router();


// site home router
// routers.use(checkAuth)
routers.use("/", require("./HomeRoute"))
// site user register router
routers.use("/users", require('./LoginRoute'))
routers.use("/users", require("./UserRoute"))
// site blog router
routers.use("/blog", require("./BlogRoute"))
routers.use("/blog/new", require("./BlogWrite"))
// routers.use(AuthCheck)
routers.use("/users", require("./ProfileRoute"))

module.exports = routers