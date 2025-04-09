const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
// const authTokenMiddleware = require('../middlewares/authTokenMiddleware');

router.get('/balance', controller.getAccountBalance.bind(controller));
router.get('/details', controller.getAccountDetails.bind(controller));
// router.get('/profile-img', controller.getProfileImgPath);

module.exports = router;
