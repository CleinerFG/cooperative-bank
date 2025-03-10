const express = require('express');
const router = express.Router();
const controller = require('../controllers/spaController');

router.get('/app*', controller.sendAppHtml);
router.get(['/', '/login', '/register'], controller.sendPublicHtml);

module.exports = router;
