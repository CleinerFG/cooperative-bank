const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const authTokenMiddleware = require('../middlewares/authTokenMiddleware');

router.get('/:cpf', authTokenMiddleware, controller.getByCpf);
router.post('/', controller.create);

module.exports = router;
