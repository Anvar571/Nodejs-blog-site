module.exports = class Profile {
    static async ProfileCon(req, res) {
        try {
            res.render("profile", {
                username: req.user?.username
            })
        } catch (error) {
            res.render("profile", {error_message: error+""})
        }
    }
}