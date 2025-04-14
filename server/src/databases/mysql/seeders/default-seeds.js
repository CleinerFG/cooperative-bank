// 'use strict';

// const { sequelize } = require('../index');
// const { seedDefaultLogger } = require('../../../lib/utils/loggers');
// const { createLoanStatuses } = require('../../factories/loanFactory');

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     const t = await sequelize.transaction();
//     try {
//       seedDefaultLogger.info('Seeding loan_statuses');
//       await createLoanStatuses();
//       await t.commit();
//       seedDefaultLogger.info('Success all default seeds');
//     } catch (e) {
//       await t.rollback();
//       seedDefaultLogger.error(`Seeds were removed: ${e.message}`);
//     }
//   },

//   async down(queryInterface, Sequelize) {
//     await queryInterface.bulkDelete('loan_statuses', null, {});
//   },
// };
