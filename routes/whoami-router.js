const express = require('express');
const router = express.Router();

const { whoami } = require('../controllers/whoami')

router.route("/whoami").get(whoami)

module.exports = router;