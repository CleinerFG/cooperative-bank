const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.get('/:cpf', controller.getByCpf);
router.post('', controller.create);

module.exports = router;
