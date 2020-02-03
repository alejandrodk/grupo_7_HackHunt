'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('clientes_cv', {
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
      user_dni:{
        type: Sequelize.INTEGER,
      },
      user_datebirth:{
        type: Sequelize.DATE,
      },
      user_gender:{
        type: Sequelize.STRING,
      },
      user_civilstate:{
        type: Sequelize.STRING,
      },
      user_phone:{
        type: Sequelize.INTEGER,
      },
      user_city:{
        type: Sequelize.STRING,
      },
      user_position:{
        type: Sequelize.STRING,
      },
      user_position_level:{
        type: Sequelize.STRING,
      },
      user_position_description:{
        type: Sequelize.TEXT,
      },
      user_git:{
        type: Sequelize.STRING,
      },
      user_website:{
        type: Sequelize.STRING,
      },
      user_stack:{
        type: Sequelize.STRING,
      },
      user_lang:{
        type: Sequelize.STRING,
      },
      user_lang_level:{
        type: Sequelize.STRING,
      },
      user_work_sit:{
        type: Sequelize.STRING,
      },
      
      user_work_wish:{
        type: Sequelize.STRING,
      },
      user_wish_area:{
        type: Sequelize.STRING,
      },
      user_salary:{
        type: Sequelize.STRING,
      },
      user_work_location:{
        type: Sequelize.STRING,
      }


    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('clientes_cv')
  }
};
