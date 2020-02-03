'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('clientes_educ', {
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
      user_career:{
        type: Sequelize.STRING,
      },
      user_institution:{
        type: Sequelize.STRING,
      },
      user_career_title:{
        type: Sequelize.STRING,
      },
      user_career_since:{
        type: Sequelize.STRING,
      },
      user_career_to:{
        type: Sequelize.STRING,
      },
      user_career_description:{
        type: Sequelize.STRING,
      }

    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('clientes_educ');
  }
};
