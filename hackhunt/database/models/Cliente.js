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
            as : 'favoritos',
            through : 'userFavoritos', 
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
            as : 'empresa_favorita',
            through : 'cmpFavoritos',
            foreignKey : 'user_id',
            otherKey : 'cmp_id',
            timestamps : false 
        })

    }


    Cliente.prototype.cvVisto = function(id_anuncio,id_cliente)
    {
       
        for(let i = 0; i<this.candidato.length; i++)
        {
               if(this.candidato[i].id == id_anuncio && this.candidato[i].postulantes.cli_id == id_cliente)
                {
                    if(this.candidato[i].postulantes.visto == 1)
                    {
                        return true;
                    }
                }
        }
        return false;
    }

    return Cliente;
}