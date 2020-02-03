'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('clientes_exp', {
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
      user_cmp_experience:{
        type: Sequelize.STRING,
      },
      user_cmp_position:{
        type: Sequelize.STRING,
      },
      user_experience_since:{
        type: Sequelize.DATE,
      },
      user_experience_to:{
        type: Sequelize.DATE,
      },
      user_experience_description:{
        type: Sequelize.TEXT,
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('clientes_exp')
  }
};
