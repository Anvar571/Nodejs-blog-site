function checkMiddleware(req, res, next) {
    if (!req.cookies?.token) {
        return res.redirect("/")
    }
    next()
}

function checkMiddlewareUser(req, res, next) {
    if (req.cookies?.token){
        return res.redirect("/")
    }
    next()
}

module.exports = {
    checkMiddleware,
    checkMiddlewareUser
}