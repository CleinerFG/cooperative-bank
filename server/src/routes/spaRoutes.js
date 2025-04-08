const express = require('express');
const router = express.Router();
const controller = require('../controllers/spaController');

router.get('/app*', controller.sendAppHtml.bind(controller));
router.get(
  ['/', '/login', '/register'],
  controller.sendPublicHtml.bind(controller)
);

module.exports = router;
