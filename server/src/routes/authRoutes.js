const express = require('express');
const router = express.Router();
// const controller = require('../controllers/operationController');
const authController = require('../controllers/authController');
const {
  loginUserMiddleware,
} = require('../middlewares/validators/userMiddlewares');

router.post('/login', loginUserMiddleware, authController.login);
// router.post('/operation', controller.auth);

module.exports = router;
