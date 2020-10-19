'use strict';
const {
  Model
} = require('sequelize');
const {Musicians} = require('./musicians');
const {musicians_instruments} = require('./musicians_instruments');
module.exports = (sequelize, DataTypes) => {
  class Instrument extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Musicians, musicians_instruments}) {
   
      Musicians.belongsToMany(Instrument, {through: musicians_instruments})
   
      // define association here
    }
  };
  Instrument.init({
    instrument: DataTypes.STRING,
  
  }, {
    sequelize,
    modelName: 'Instrument',
  });
  return Instrument;
};