const express = require('express');
const { RegisterController } = require('../controllers/RegisterController');
const router = express.Router();

// import router


/* POST users listing. */
router.get('/', RegisterController);

module.exports = router;
