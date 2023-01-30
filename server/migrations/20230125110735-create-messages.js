'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      showName: {
        type: Sequelize.STRING
      },
      showReceiptient: {
        type: Sequelize.STRING
      },
      showDate: {
        type: Sequelize.STRING
      },
      putSoundtrack: {
        type: Sequelize.STRING
      },
      theme: {
        type: Sequelize.STRING
      },
      media: {
        type: Sequelize.STRING
      },
      message: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Messages');
  }
};