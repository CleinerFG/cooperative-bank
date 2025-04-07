const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
// const authTokenMiddleware = require('../middlewares/authTokenMiddleware');

router.get('/balance', userController.getAccountBalance);
router.get('/details', userController.getAccountDetails);
router.get('/profile-img', userController.getProfileImgPath);

module.exports = router;
