'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class musicians_instruments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  musicians_instruments.init({
    instrument_id: DataTypes.INTEGER,
    musician_id: DataTypes.INTEGER,
    grade: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'musicians_instruments',
  });
  return musicians_instruments;
};