const express = require('express');
const { getBuyersRoute } = require('../controllers/buyersControllers');

const router = express.Router();

router.get('/', getBuyersRoute);

module.exports = router;
