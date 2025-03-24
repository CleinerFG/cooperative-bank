const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const authTokenMiddleware = require('../middlewares/authTokenMiddleware');
const createUserValidatorMiddleware = require('../middlewares/validators/user/createUserValidatorMiddleware');

router.get('/:cpf', authTokenMiddleware, controller.getByCpf);
router.post('/', createUserValidatorMiddleware, controller.create);

module.exports = router;
