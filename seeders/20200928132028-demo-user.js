"use strict";
const { userData } = require("../data/users");

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    return queryInterface.bulkInsert("Users", userData, {});
   
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});  
  },
};
