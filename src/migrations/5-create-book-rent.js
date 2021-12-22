'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bookRents', {
      id_rent: {
        type: Sequelize.STRING
      },
      rent_date: {
        type: Sequelize.DATE
      },
      return_date: {
        type: Sequelize.DATE
      },
      id_membership: {
        type: Sequelize.STRING
      },
      created_date: {
        type: Sequelize.DATE
      },
      created_by: {
        type: Sequelize.STRING
      },
      changed_date: {
        type: Sequelize.DATE
      },
      changed_by: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('bookRents');
  }
};