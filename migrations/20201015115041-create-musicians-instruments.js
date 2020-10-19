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
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      InstrumentId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Instruments',        
          },
          key: 'id'
        }
      },
      MusicianId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Musicians',      
          },
          key: 'id'
        }
      },
      instrument: {
        type: Sequelize.STRING
      },
      grade: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('musicians_instruments');
  }
};