'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('members', {
      id_membership: {
        type: Sequelize.STRING
      },
      nik: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      birth_date: {
        type: Sequelize.DATE
      },
      birth_place: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      last_rent: {
        type: Sequelize.DATE
      },
      is_actived: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('members');
  }
};