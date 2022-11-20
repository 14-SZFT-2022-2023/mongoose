const express = require('express');
const { getLoginRoute } = require('../controllers/loginControllers');
const router = express.Router();

router.get('/', getLoginRoute);

module.exports = router;
