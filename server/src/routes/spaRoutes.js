const express = require('express');
const router = express.Router();
const controller = require('../controllers/spaController');

router.get(
  ['/', '/login', '/register', '/app*'],
  controller.sendHtml.bind(controller)
);

module.exports = router;
