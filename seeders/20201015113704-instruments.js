'use strict';
const {instruments} = require("../data/instruments")

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert("Instruments", instruments);
   
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Instruments", null);
 
  }
};
