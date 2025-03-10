const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.get('/:cpf', controller.getByCpf);

module.exports = router;
