const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const authTokenMiddleware = require('../middlewares/authTokenMiddleware');
const {
  createUserMiddleware,
  getUserByCpfMiddleware,
} = require('../middlewares/validators/userMiddlewares');

router.get(
  '/:cpf',
  authTokenMiddleware,
  getUserByCpfMiddleware,
  controller.getByCpf
);
router.post('/', createUserMiddleware, controller.create);

module.exports = router;
