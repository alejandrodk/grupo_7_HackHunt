module.exports = (sequelize, dataTypes) => {
    
    let alias = 'skills';
    let cols = {
        skill_id : {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        skill_name : {
            type: dataTypes.STRING,
            allowNull: false
        }
    }
    const Skill = sequelize.define(alias,cols,{  timestamps: false});

    Skill.associate = function(models){
        Skill.belongsToMany(model.clientes,{
            as : 'cliente',
            through : 'user_skills',
            foreignKey : 'skill_id',
            otherKey : 'user_id'
        }),
        Skill.belongsToMany(model.anuncios,{
            as : 'anuncio',
            through : 'anuncios_skills',
            foreignKey : 'skill_id',
            otherKey : 'anuncio_id'
        })
    }

    return Skill;
}