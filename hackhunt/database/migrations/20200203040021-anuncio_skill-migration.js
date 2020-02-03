'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('anuncio_skill', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      anuncio_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName: 'anuncios',
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
    return queryInterface.dropTable('anuncio_skill');
  }
};
