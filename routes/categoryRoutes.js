const express = require('express');
const {
    getCategoryRoute,
    postCategoryRoute,
    deleteCategoryRoute,
    getUpdateCategoryRoute,
    postUpdateCategoryRoute,
} = require('../controllers/categoryControllers');
const router = express.Router();

router.get('/', getCategoryRoute);
router.post('/', postCategoryRoute);
router.get('/torol/:id', deleteCategoryRoute);
router.get('/modosit/:id', getUpdateCategoryRoute);
router.post('/modosit/:id', postUpdateCategoryRoute);

module.exports = router;
