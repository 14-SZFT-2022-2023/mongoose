const express = require('express');
const {
    getCategoryRoute,
    postCategoryRoute,
} = require('../controllers/categoryControllers');
const router = express.Router();

router.get('/', getCategoryRoute);
router.post('/', postCategoryRoute);

module.exports = router;
