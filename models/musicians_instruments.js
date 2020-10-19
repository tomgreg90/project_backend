'use strict';
const {
  Model
} = require('sequelize');
const {Musicians} = require('./musicians');
module.exports = (sequelize, DataTypes) => {
  class musicians_instruments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Musicians, Instrument, musicians_instruments}) {

      Musicians.belongsToMany(Instrument, { through: musicians_instruments });
      Instrument.belongsToMany(Musicians, { through: musicians_instruments });
      // define association here
    }
  };
  musicians_instruments.init({
    InstrumentId: DataTypes.INTEGER,
    MusicianId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'musicians_instruments',
  });
  return musicians_instruments;
};