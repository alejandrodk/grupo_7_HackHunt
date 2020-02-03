'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('clientes', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      user_lastname: {
        type: Sequelize.STRING,
        allowNull: false
    },

    user_email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
    },

    user_passwd: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cmp_avatar: {
      type: Sequelize.STRING
  } 
  })
  },

  down: (queryInterface, Sequelize) => {
  return queryInterface.dropTable('clientes');
  }
};
