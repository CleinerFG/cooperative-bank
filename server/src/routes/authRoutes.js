const express = require('express');
const router = express.Router();
const controller = require('../controllers/authController');
const authTokenMiddleware = require('../middlewares/authTokenMiddleware');
// const {
//   loginUserMiddleware,
// } = require('../middlewares/validators/user/userMiddlewares');

router.post('/login', controller.login.bind(controller));
router.get('/check', authTokenMiddleware, controller.check.bind(controller));

module.exports = router;
