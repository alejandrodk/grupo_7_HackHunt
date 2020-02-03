'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('postulantes', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      adv_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName: 'anuncios',
            
          },
          key: 'id'
        },
        allowNull: false
      },
      cli_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName: 'clientes',
          
          },
          key: 'id'
        },
        allowNull: false
      }
    }) 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('postulantes');
  }
};
