'use strict';
const {musicians_instruments} = require("../data/musicians_instruements")

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('musicians_instruments', musicians_instruments);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('musicians_instruments', null);
  }
};
