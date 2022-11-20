const express = require('express');
const { getCategoriesRoute } = require('../controllers/categoriesControllers');

const router = express.Router();

router.get('/', getCategoriesRoute);

module.exports = router;
