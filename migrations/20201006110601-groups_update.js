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
      queryInterface.addColumn('Groups', 'musicGenre', {
        type: Sequelize.DataTypes.STRING
      }),
    
      queryInterface.addColumn("Groups", "user_Id", {
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
     queryInterface.removeColumn("Groups", "user_Id"),
     queryInterface.removeColumn("Groups", "musicGenre")
  ])
 
  },
};
