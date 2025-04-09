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
      if (!opaqueId) throw new InvalidRequestError('invalidOpaqueId');

      const balance = await this.service.getAccountBalance(opaqueId);
      return res.json(balance);
    } catch (err) {
      next(err);
    }
  }
}

const userController = new UserController();
module.exports = userController;

// module.exports = {
//   async create(req, res) {
//     const data = req.body;
//     const result = await userService.create({ ...data });
//     return responseHandler(res, result, () => res.status(201).json());
//   },

//   async getByCpf(req, res) {
//     const cpf = req.params.cpf;
//     const result = await userService.getByCpf(cpf);
//     return responseHandler(res, result);
//   },

//   async getAccountBalance(req, res) {
//     const opaqueId = req.userOpaqueId;
//     const balance = await userService.getAccountBalance(opaqueId);
//     return res.json(balance);
//   },

//   async getAccountDetails(req, res) {
//     const opaqueId = req.userOpaqueId;
//     const details = await userService.getAccountDetails(opaqueId);
//     return res.json(details);
//   },

//   async getProfileImgPath(req, res) {
//     const opaqueId = req.userOpaqueId;
//     try {
//       const photoPath = await userService.getProfileImgPathById(opaqueId);
//       res.sendFile(photoPath);
//     } catch (e) {
//       res.status(204);
//     }
//   },
// };
