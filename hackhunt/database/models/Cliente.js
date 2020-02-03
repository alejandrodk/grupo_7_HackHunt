module.exports = (sequelize, dataTypes) => {
    const cliente = sequelize.define(alias,cols,{  timestamps: false});
    let alias = 'Cliente';
    let cols = {
        id : {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        user_passwd : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_email : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_name : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_lastname : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_avatar : {
            type: dataTypes.STRING
        }
    }

    Cliente.associate = function(modelos){
        Cliente.belongsToMany(modelos.User_skill, {
            as : 'clientes',
            through : 'user_skills',
            foreignKey : 'user_id',
            otherKey : 'skill_id',
            timestamps : false
        })
    }

    return cliente;
}