'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bookRent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  bookRent.init({
    id_rent: DataTypes.STRING,
    rent_date: DataTypes.DATE,
    return_date: DataTypes.DATE,
    id_membership: DataTypes.STRING,
    created_date: DataTypes.DATE,
    created_by: DataTypes.STRING,
    changed_date: DataTypes.DATE,
    changed_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'bookRent',
  });
  return bookRent;
};