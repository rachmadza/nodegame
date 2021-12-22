'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user.init({
    id_user: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    last_login: DataTypes.DATE,
    is_actived: DataTypes.BOOLEAN,
    is_deleted: DataTypes.BOOLEAN,
    created_date: DataTypes.DATE,
    created_by: DataTypes.STRING,
    changed_date: DataTypes.DATE,
    changed_by: DataTypes.STRING,
    deleted_date: DataTypes.DATE,
    deleted_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};