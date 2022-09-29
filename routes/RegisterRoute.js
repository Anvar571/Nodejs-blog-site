const express = require('express');
const router = express.Router();

// import router
const RegisterRoute = require("../controllers/RegisterController")

/* POST users listing. */
router.post('/', RegisterRoute);

module.exports = router;
