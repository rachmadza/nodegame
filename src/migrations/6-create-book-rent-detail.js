'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bookRentDetails', {
      id_rent_detail: {
        type: Sequelize.STRING
      },
      id_book: {
        type: Sequelize.STRING
      },
      id_rent: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('bookRentDetails');
  }
};