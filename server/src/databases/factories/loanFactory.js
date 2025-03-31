const LoanStatusModel = require('../../models/LoanStatusModel');
const LoanModel = require('../../models/LoanModel');
const userRepository = require('../../repositories/userRepository');

const { seedDefaultLogger } = require('../../lib/utils/loggers');

const createLoanStatuses = async () => {
  const defaultStatuses = [
    'pending',
    'active',
    'finished',
    'canceled',
    'rejected',
  ];

  for (let i = 0; i < defaultStatuses.length; i++) {
    const status = defaultStatuses[i];
    const existingStatus = await LoanStatusModel.findOne({
      where: { description: status },
    });

    if (!existingStatus) {
      await LoanStatusModel.create({ description: status });
      seedDefaultLogger.info(`"${status}" created.`);
    } else {
      seedDefaultLogger.warn(`"${status}" already exists.`);
    }
  }
};

const createLoan = async () => {
  const users = await userRepository.findAll();
  users.forEach((user) => console.table(user));
};

module.exports = { createLoanStatuses, createLoan };
