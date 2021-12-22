'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  book.init({
    id_book: DataTypes.STRING,
    code: DataTypes.STRING,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    publisher: DataTypes.STRING,
    description: DataTypes.STRING,
    is_deleted: DataTypes.BOOLEAN,
    id_location: DataTypes.INTEGER,
    created_date: DataTypes.DATE,
    created_by: DataTypes.STRING,
    changed_date: DataTypes.DATE,
    changed_by: DataTypes.STRING,
    deleted_date: DataTypes.DATE,
    deleted_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};