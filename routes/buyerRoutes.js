const express = require('express');
const {
    getBuyerRoute,
    postBuyerRoute,
} = require('../controllers/buyerControllers');
const router = express.Router();

router.get('/', getBuyerRoute);
router.post('/', postBuyerRoute);

module.exports = router;
