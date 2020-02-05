module.exports = (sequelize, dataTypes) => {
   
    let alias = 'cliente_cv';
    let cols = {
        user_id : {
            type: dataTypes.INTEGER
        },
        user_dni : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_datebirth : {
            type: dataTypes.DATE,
            allowNull: false
        },
        user_gender : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_civilstate : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_phone : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_city : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_position : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_position_level : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_position_description : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_git : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_website : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_stack : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_lang : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_lang_level : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_work_sit: {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_work_wish : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_wish_area : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_salary : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_work_location : {
            type: dataTypes.STRING,
            allowNull: false
        }
    }
    const Cliente_cv = sequelize.define(alias,cols,{  timestamps: false});

    Cliente_cv.associate = function(models) {
        Cliente_cv.belongsTo(models.clientes, {
            as: 'cliente',
            foreignKey: 'user_id'
        })
    };
    
    return Cliente_cv;
}