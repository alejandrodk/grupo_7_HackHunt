'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_skill', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName: 'clientes',
          },
          key: 'id'
        },
        allowNull: false
      },
      skill_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName: 'skills',
          },
          key: 'id'
        },
        allowNull: false
      }
    }) 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_skill');
  }
};
