const routers = require("express").Router();

// site home router
// routers.use(checkAuth)
routers.use("/", require("./HomeRoute"))
// site user register router
routers.use("/users", require('./LoginRoute'))
routers.use("/users", require("./UserRoute"))
// site blog router
routers.use("/blog", require("./BlogRoute"))
routers.use("/blog/new",require("./BlogWrite"))
// routers.use(AuthCheck)
routers.use("/users",require("./ProfileRoute"))
routers.use("/logout", require("./LogOutRoute"))
// update post and delete post
routers.use("/delete", require("./DeleteRoute"))
routers.use("/update", require("./UpdateRoute"))

routers.use((req, res, next) => {
    res.render("error")
    next()
})

module.exports = routers