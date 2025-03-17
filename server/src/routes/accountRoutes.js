const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.get('/balance', controller.getBalance);
router.get('/details', controller.getDetails);
router.get('/profile-img', controller.getProfileImg);

module.exports = router;
