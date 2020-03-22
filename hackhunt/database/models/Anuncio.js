module.exports = (sequelize, dataTypes) => {
    
    let alias = 'anuncios';
    let cols = {
        id : {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        cmp_id : {
            type: dataTypes.INTEGER,
        },
        adv_publication : {
            type: dataTypes.STRING,
            allowNull: false
        },
        adv_title : {
            type: dataTypes.STRING,
            allowNull: false
        },
        adv_description : {
            type: dataTypes.STRING(500),
            allowNull: false

        },
        adv_date_contract : {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        adv_area : {
            type: dataTypes.STRING,
            allowNull: false
        },
        adv_location : {
            type: dataTypes.STRING,
            allowNull: false
        },
        adv_position : {
            type: dataTypes.STRING,
            allowNull: false
        },
        adv_working_day : {
            type: dataTypes.STRING,
            allowNull: false
        },
        adv_salary : {
            type: dataTypes.STRING,
            allowNull: false
        },
        adv_advantage : {
            type: dataTypes.STRING,
            allowNull: false
        }
    }
    const anuncio = sequelize.define(alias,cols,{ tableName:'anuncios', timestamps: false});

    anuncio.associate = function(models){
        anuncio.belongsTo(models.empresas,{
            as: "empresas",
            foreignKey: "cmp_id",
        }),
        anuncio.belongsToMany(models.clientes,{
            as : 'candidatos',
            through : 'postulantes',
            foreignKey : 'adv_id',
            otherKey : 'cli_id',
            timestamps : false
        }),
        anuncio.belongsToMany(models.clientes,{
            as : 'clientes',
            through : 'userFavoritos',
            foreignKey : 'adv_id',
            otherKey : 'user_id',
            timestamps : false
        }),
        anuncio.belongsToMany(models.skills,{
            as : 'adv_skills',
            through : 'anuncio_skill',
            foreignKey  : 'anuncio_id',
            otherKey : 'skill_id',
            onDelete: 'cascade',
            timestamps : false
        }) 
        
    }

    /* Esta funcion va a realizar una comparación entre las skills de un cliente con las skills 
       requeridas por el anuncio al que se postuló.
       La función va a recibir un array con todos los skills del cliente postulado y mediante un 
       ciclo for se recorren todos los skills y se comparan con cada uno de los skills excluyentes 
       del anuncio para devolver un array con los skills que comparten ambos.
    */
    anuncio.prototype.compareSkills = function(userSkills)
    {
        let skills; 
            skills = this.adv_skills.filter(skill =>{
                for(let i = 0; i<userSkills.length; i++)
                {
                    if(skill.skill_name == userSkills[i].skill_name)
                    {
                        return skill;
                    }
                      
                }})
        return skills;        
    }



    return anuncio;
}