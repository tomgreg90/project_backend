"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("Musicians", "instrument", {
        type: Sequelize.ARRAY(Sequelize.STRING),
      }),
      queryInterface.addColumn("Musicians", "about", {
        type: Sequelize.TEXT,
      }),
      queryInterface.addColumn("Musicians", "age", {
        type: Sequelize.INTEGER,
      }),
      queryInterface.addColumn("Musicians", "user_Id", {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users',          
          },
          key: 'id'
        }
      })
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("Musicians", "instrument"),
      queryInterface.removeColumn("Musicians", "about"),
      queryInterface.removeColumn("Musicians", "age"),
      queryInterface.removeColumn("Musicians", "user_Id")
    ]);
  },
};
