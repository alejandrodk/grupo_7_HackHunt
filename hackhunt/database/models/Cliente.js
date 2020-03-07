module.exports = (sequelize, dataTypes) => {
    
    let alias = 'clientes';
    let cols = {
        user_id : {
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


    Cliente.associate = function(modelos) {
        Cliente.belongsTo(modelos.cliente_cv, {
            as: 'cliente_cv',
            foreignKey: 'user_id'
        }),
        Cliente.hasMany(modelos.cliente_education,{
            as: 'cliente_education',
            foreignKey : 'user_id'
        }),
        Cliente.hasMany(modelos.cliente_experience,{
            as : 'cliente_experience',
            foreignKey : 'user_id'
        }),
        Cliente.belongsToMany(modelos.anuncios,{
            as : 'favorito',
            through : 'favoritos',
            foreignKey  : 'user_id',
            otherKey : 'adv_id',
            timestamps : false
        }),
        Cliente.belongsToMany(modelos.anuncios,{
            as : 'candidato',
            through : 'postulantes',
            foreignKey  : 'cli_id',
            otherKey : 'adv_id',
            timestamps : false
        }),
        Cliente.belongsToMany(modelos.skills,{
            as : 'skill',
            through : 'user_skill',
            foreignKey : 'user_id',
            otherKey : 'skill_id',
            timestamps : false
        }),
        Cliente.belongsToMany(modelos.empresas,{
            as : 'empresa',
            through : 'seguidos',
            foreignKey : 'user_id',
            otherKey : 'cmp_id',
            timestamps : false
        })
    };

    return Cliente;
}