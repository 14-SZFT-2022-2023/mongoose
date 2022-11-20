const express = require('express');
const {
    getItemRoute,
    postItemRoute,
    deleteItemRoute,
    getUpdateItemRoute,
    postUpdateItemRoute,
} = require('../controllers/itemControllers');
const router = express.Router();

router.get('/', getItemRoute);
router.post('/', postItemRoute);
router.get('/torol/:id', deleteItemRoute);
router.get('/modosit/:id', getUpdateItemRoute);
router.post('/modosit/:id', postUpdateItemRoute);

module.exports = router;
