module.exports = (sequelize, dataTypes) => {
    
    let alias = 'clientes';
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
        Cliente.belongsTo(models.clientes, {
            as: 'cliente_cv',
            foreignKey: 'user_id'
        }),
        Cliente.belongsTo(models.cliente_education,{
            as: 'cliente_education',
            foreignKey : 'user_id'
        }),
        Cliente.belongsTo(model.cliente_experience,{
            as : 'cliente_experience',
            foreignKey : 'user_id'
        }),
        Cliente.belongsToMany(model.anuncios,{
            as : 'favorito',
            through : 'favoritos',
            foreignKey  : 'adv_id',
            otherKey : 'cli_id',
            timestamps : false
        }),
        Cliente.belongsToMany(model.anuncios,{
            as : 'postulante',
            through : 'postulantes',
            foreignKey  : 'adv_id',
            otherKey : 'cli_id',
            timestamps : false
        }),
        Cliente.belongsToMany(model.skills,{
            as : 'skill',
            through : 'user_skills',
            foreignKey : '',
            otherKey : '',
            timestamps : false
        })
    };

    return Cliente;
}