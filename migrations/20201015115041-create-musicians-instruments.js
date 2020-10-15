'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('musicians_instruments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      instrument_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Instruments',        
          },
          key: 'id'
        }
      },
      musician_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Musicians',      
          },
          key: 'id'
        }
      },
      grade: {
        type: Sequelize.INTEGER
      },
     
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('musicians_instruments');
  }
};