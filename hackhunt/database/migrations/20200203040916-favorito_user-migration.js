'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('favoritos', {
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
      adv_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName: 'anuncios',
          
          },
          key: 'id'
        },
        allowNull: false
      }
    }) 
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('favoritos');
  }
};
