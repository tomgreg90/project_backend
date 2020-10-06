"use strict";
const musicianData = require("../data/musicians");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Musicians", musicianData);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Musicians", null);
  },
};
