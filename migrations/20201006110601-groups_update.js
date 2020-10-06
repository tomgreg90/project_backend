"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn("Groups", "email", {
        type: Sequelize.STRING,
        isEmail: true,
      }),
      queryInterface.changeColumn("Groups", "about", {
        type: Sequelize.TEXT,
      }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // return Promise.all([
    //   queryInterface.changeColumn("Groups", "email", {}),
    //   queryInterface.changeColumn("Groups", "about", {}),
    // ]);
  },
};
