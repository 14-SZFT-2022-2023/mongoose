const express = require('express');
const {
    getItemRoute,
    postItemRoute,
} = require('../controllers/itemControllers');
const router = express.Router();

router.get('/', getItemRoute);
router.post('/', postItemRoute);

module.exports = router;
