const { ProfileCon } = require('../controllers/ProFileCon');
const { checkMiddleware } = require('../middlewares/Middleware');

const router = require('express').Router();

router.get("/profile", checkMiddleware, ProfileCon)

module.exports = router