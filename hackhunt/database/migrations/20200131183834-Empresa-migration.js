'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('empresas', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      cmp_user_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cmp_user_lastname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cmp_user_gender: {
      type: Sequelize.STRING,
  },
  cmp_user_dni:
  {
      type: Sequelize.INTEGER,
  },
  cmp_user_datebirth: {
      type: Sequelize.STRING,
      
  },

    cmp_user_email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
    },

    cmp_user_passwd: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cmp_user_phone:{
      type: dataTypes.STRING
  },
  cmp_user_city:{
      type: dataTypes.STRING,
  },

    cmp_name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    cmp_cuit: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    cmp_tel: {
        type: Sequelize.INTEGER
    },
    
    cmp_sector: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cmp_website: {
      type: dataTypes.STRING
  },
  cmp_linkedin: {
      type: dataTypes.STRING
  },
  cmp_facebook: {
      type: dataTypes.STRING
  },
  cmp_instagram: {
      type: dataTypes.STRING
  },
  cmp_description: 
        {
            type:dataTypes.TEXT
        },

    cmp_avatar: {
        type: Sequelize.STRING
    }  
    });
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('empresas');
    
  }
};
