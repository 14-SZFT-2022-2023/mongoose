const express = require('express');
const { getRootRoute } = require('../controllers/rootControllers');
const router = express.Router();

router.get('/', getRootRoute);

module.exports = router;
