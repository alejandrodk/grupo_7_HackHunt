module.exports = (sequelize, dataTypes) => {
    
    let alias = 'cliente_experience';
    let cols = {
        user_id: {
            foreignKey: true,
            type: dataTypes.INTEGER
        },
        user_cmp_experience : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_cmp_position : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_cmp_experience_since : {
            type: dataTypes.STRING,
        },
        user_cmp_experience_to: {
            type: dataTypes.STRING,
        },
        user_experience_description: {
            type: dataTypes.STRING
        }
    }
    const Cliente_experience = sequelize.define(alias,cols,{  
        timestamps: false,
        tableName : 'clientes_experience'
    });

    Cliente_experience.associate = function(modelos) {
        Cliente_experience.belongsTo(modelos.clientes, {
            as: 'cliente',
            foreignKey: 'user_id'
        })
    };
    
    return Cliente_experience;
}