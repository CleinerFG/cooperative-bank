const express = require('express');
const router = express.Router();
const controller = require('../controllers/operationController');

router.post('/operation', controller.auth);

module.exports = router;
