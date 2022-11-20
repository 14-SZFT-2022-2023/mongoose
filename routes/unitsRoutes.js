const express = require('express');
const { getUnitsRoute } = require('../controllers/unitsControllers');
const router = express.Router();

router.get('/', getUnitsRoute);

module.exports = router;
