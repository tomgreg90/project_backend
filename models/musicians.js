'use strict';
const {
  Model
} = require('sequelize');
const Instrument = require('./instrument');
module.exports = (sequelize, DataTypes) => {
  class Musicians extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Instrument, Musicians, musicians_instruments}) {
     
      Instrument.belongsToMany(Musicians, {through: musicians_instruments})
      // define association here
    }
  };
  Musicians.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    instrument: DataTypes.ARRAY(DataTypes.STRING),
    about: DataTypes.TEXT,
    user_Id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Musicians',
  });
  return Musicians;
};