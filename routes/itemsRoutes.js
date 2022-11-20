const express = require('express');
const { getItemsRoute } = require('../controllers/itemsControllers');

const router = express.Router();

router.get('/', getItemsRoute);

module.exports = router;
