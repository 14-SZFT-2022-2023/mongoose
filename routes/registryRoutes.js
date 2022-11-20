const express = require('express');
const {
    getRegistryRoute,
    postRegistryRoute,
} = require('../controllers/registryControllers');
const router = express.Router();

router.get('/', getRegistryRoute);
router.post('/', postRegistryRoute);

module.exports = router;
