'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('skills', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      skill_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    }) 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('skills');
  }
};
