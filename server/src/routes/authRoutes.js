const express = require('express');
const router = express.Router();
// const controller = require('../controllers/operationController');
const authController = require('../controllers/authController');

router.post('/login', authController.login);
// router.post('/operation', controller.auth);

module.exports = router;
