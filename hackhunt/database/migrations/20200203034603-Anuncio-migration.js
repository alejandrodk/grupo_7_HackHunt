'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('anuncios', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      cmp_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'empresas',
          },
          key: 'id'
        },
        
      },
      adv_publication: {
        type: Sequelize.STRING,
        allowNull: false
    },

    adv_title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
    },

    adv_description: {
        type: Sequelize.TEXT,
        allowNull: false
    },

    adv_skills: {
        type: Sequelize.STRING,
        allowNull: false
    },

    adv_skills_optionals: {
        type: Sequelize.STRING,
    },

    adv_date_contract: {
        type: Sequelize.DATE
    },
    
    adv_area: {
        type: Sequelize.STRING,
        allowNull: false
    },

    adv_location: {
        type: Sequelize.STRING
    },
    
    adv_position: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    adv_working_day: {
        type: Sequelize.STRING,
        
    },
    
    adv_salary: {
        type: Sequelize.STRING,
      
    },
    
    adv_advantage: {
        type: Sequelize.TEXT,
        
    }, 
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('anuncios');
  }
};
