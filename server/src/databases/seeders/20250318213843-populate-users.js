'use strict';

const { createUser } = require('../factories/userFactory');
const { seedUsersLogger } = require('../loggers');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      const promises = [];
      for (let i = 0; i < 20; i++) {
        promises.push(createUser());
      }
      await Promise.all(promises);
    } catch (e) {
      seedUsersLogger.error(e.message);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
