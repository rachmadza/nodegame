'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bookRentDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  bookRentDetail.init({
    id_rent_detail: DataTypes.STRING,
    id_book: DataTypes.STRING,
    id_rent: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'bookRentDetail',
  });
  return bookRentDetail;
};