'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('loans', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      opaque_id: {
        type: Sequelize.UUID,
        unique: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
      },
      debtor_user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT',
      },
      creditor_user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT',
      },
      contract_date: {
        type: Sequelize.DATE,
      },
      value: {
        type: Sequelize.DECIMAL(11, 2),
        allowNull: false,
      },
      month_rate: {
        type: Sequelize.DECIMAL(4, 2),
        allowNull: false,
      },
      installments_qty: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      installments_generated: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      status_id: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
        references: {
          model: 'loan_statuses',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('loans');
  },
};
