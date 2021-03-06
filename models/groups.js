'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Groups extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Groups.init({
    groupName: DataTypes.STRING,
    contact: DataTypes.STRING,
    email: DataTypes.STRING,
    musicGenre: DataTypes.STRING,
    about: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Groups',
  });
  return Groups;
};