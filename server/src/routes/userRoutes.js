const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.get('/:cpf', controller.getUserByCpf);

module.exports = router;
