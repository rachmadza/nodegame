'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bookLocations', {
      id_location: {
        type: Sequelize.INTEGER
      },
      rack_code: {
        type: Sequelize.STRING
      },
      rack_description: {
        type: Sequelize.STRING
      },
      is_deleted: {
        type: Sequelize.BOOLEAN
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
      },
      deleted_date: {
        type: Sequelize.DATE
      },
      deleted_by: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('bookLocations');
  }
};