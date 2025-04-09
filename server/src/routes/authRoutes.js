const express = require('express');
const router = express.Router();
const controller = require('../controllers/authController');
// const {
//   loginUserMiddleware,
// } = require('../middlewares/validators/user/userMiddlewares');

router.post('/login', controller.login.bind(controller));

module.exports = router;
