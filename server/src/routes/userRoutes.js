const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
// const authTokenMiddleware = require('../middlewares/authTokenMiddleware');
const {
  createUserMiddleware,
  getUserByCpfMiddleware,
} = require('../middlewares/validators/user/userMiddlewares');

router.get(
  '/:cpf',
  getUserByCpfMiddleware,
  controller.getByCpf.bind(controller)
);
router.post('/', createUserMiddleware, controller.create.bind(controller));

module.exports = router;
