const { ProfileCon } = require('../controllers/ProFileCon');

const router = require('express').Router();

router.get("/profile", ProfileCon)

module.exports = router