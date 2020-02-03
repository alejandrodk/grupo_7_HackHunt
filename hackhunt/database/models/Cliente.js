module.exports = (sequelize, dataTypes) => {
    
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
    const Cliente = sequelize.define(alias,cols,{  timestamps: false});


    Cliente.associate = function(models) {
        Cliente.belongsTo(models.user_skills, {foreignKey: 'user_id'})
    };

    return Cliente;
}