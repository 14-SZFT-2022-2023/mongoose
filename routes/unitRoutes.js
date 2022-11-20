const express = require('express');
const {
    getUnitRoute,
    postUnitRoute,
    deleteUnitRoute,
    getUpdateUnitRoute,
    postUpdateUnitRoute,
} = require('../controllers/unitControllers');
const router = express.Router();

router.get('/', getUnitRoute);
router.post('/', postUnitRoute);
router.get('/torol/:id', deleteUnitRoute);
router.get('/modosit/:id', getUpdateUnitRoute);
router.post('/modosit/:id', postUpdateUnitRoute);

module.exports = router;
