const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const authTokenMiddleware = require('../middlewares/authTokenMiddleware');

router.get(
  '/balance',
  authTokenMiddleware,
  controller.getAccountBalance.bind(controller)
);
router.get(
  '/details',
  authTokenMiddleware,
  controller.getAccountDetails.bind(controller)
);
router.get(
  '/profile-img',
  authTokenMiddleware,
  controller.getProfileImg.bind(controller)
);

module.exports = router;
