const Controller = require('./Controller.js');
const InvalidRequestError = require('../errors/InvalidRequestError.js');
const userService = require('../services/userService.js');
const { filterBody } = require('../lib/utils/reqUtils.js');

class UserController extends Controller {
  constructor() {
    super(userService);
  }

  async create(req, res, next) {
    try {
      const body = filterBody(req.body, [
        'fullName',
        'cpf',
        'birth',
        'email',
        'password',
      ]);
      req.body = body;
      return super.create(req, res, next);
    } catch (err) {
      next(err);
    }
  }

  async getAccountBalance(req, res, next) {
    try {
      const opaqueId = req.userOpaqueId;
      if (!opaqueId) throw new InvalidRequestError('opaqueId');

      const balance = await this.service.getAccountBalance(opaqueId);
      return res.json(balance);
    } catch (err) {
      next(err);
    }
  }

  async getAccountDetails(req, res, next) {
    try {
      const opaqueId = req.userOpaqueId;
      if (!opaqueId) throw new InvalidRequestError('opaqueId');

      const details = await this.service.getAccountDetails(opaqueId);
      return res.json(details);
    } catch (err) {
      next(err);
    }
  }

  async getByCpf(req, res) {
    const { cpf } = req.params;
    const user = await this.service.getByCpf(cpf);

    if (!user) return res.status(404).json();
    return res.json(user);
  }
}

const userController = new UserController();
module.exports = userController;
