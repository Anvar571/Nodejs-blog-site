const MongoSchema = require("../modules/MongoSchema")
const validateUser = require("../modules/validateReg")


module.exports = {
    RegisterGetController: (req, res) => {
        res.render("register", {title: "register"})
    },
    RegsiterPostController: (req, res) => {
        try {
            const {username, email, password} = validateUser(req.body)
            console.log(data);
            const user = new MongoSchema({
                username,
                email,
                password,
            })
            user.save((err, data) => {
                if (err)
                    res.json(err)
                res.json(data)
            })
            res.redirect("/login")
        }catch(err) {
            res.redirect("/register")
            res.json({
                ok: false,
                message: err + ""
            })
        }
    }
}