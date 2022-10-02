const express = require('express');
const { RegisterGetController, RegsiterPostController } = require('../controllers/RegisterController');
const router = express.Router();

/* GET users listing. */
router.get('/', RegisterGetController);
// POST users listing
router.post("/", RegsiterPostController)

module.exports = router;
