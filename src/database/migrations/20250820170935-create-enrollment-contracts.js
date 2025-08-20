'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('enrollment_contracts', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      enrollment_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'enrollments', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      pdf_url: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      signed_pdf_url: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      signature_data: {
        type: Sequelize.TEXT('long'),
        allowNull: true,
      },
      signed_at: {
        type: Sequelize.DATE,
        allowNull: true,
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
  down: async (queryInterface) => {
    await queryInterface.dropTable('enrollment_contracts');
  },
};