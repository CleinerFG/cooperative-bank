const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authTokenMiddleware = require('../middlewares/authTokenMiddleware');

router.get('/balance', authTokenMiddleware, userController.getAccountBalance);
router.get('/details', authTokenMiddleware, userController.getAccountDetails);
router.get(
  '/profile-img',
  authTokenMiddleware,
  userController.getProfileImgPath
);

module.exports = router;
