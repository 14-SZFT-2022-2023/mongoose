const express = require('express');
const {
    getBuyerRoute,
    postBuyerRoute,
    deleteBuyerRoute,
    getUpdateBuyerRoute,
    postUpdateBuyerRoute,
} = require('../controllers/buyerControllers');
const router = express.Router();

router.get('/', getBuyerRoute);
router.post('/', postBuyerRoute);
router.get('/torol/:id', deleteBuyerRoute);
router.get('/modosit/:id', getUpdateBuyerRoute);
router.post('/modosit/:id', postUpdateBuyerRoute);

module.exports = router;
