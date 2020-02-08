module.exports = (sequelize, dataTypes) => {
    
    let alias = 'cliente_education';
    let cols = {
       user_id : {
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        user_career : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_institution : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_career_title : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_career_since : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_career_to : {
            type: dataTypes.STRING
        },
        user_career_description : {
            type: dataTypes.STRING
        }
    }
    const Cliente_education = sequelize.define(alias,cols,{  
        timestamps: false,
        tableName : 'clientes_education'
    });

    Cliente_education.associate = function(models) {
        Cliente_education.belongsTo(models.clientes, {
            as: 'cliente',
            foreignKey: 'user_id'
        })
    };

    return Cliente_education;
}