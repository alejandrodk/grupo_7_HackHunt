module.exports = (sequelize, dataTypes) => {
    
    let alias = 'user_skill';
    let cols = {
        user_id : {
            primaryKey: true,
            allowNull: false,
            type: dataTypes.INTEGER
        },
        skill_id : {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }
    const User_skill = sequelize.define(alias,cols,{  timestamps: false, tableName: 'user_skill'});

    User_skill.associate = function(modelos){
        User_skill.hasMany(modelos.skills,{
            as: 'skill',
            foreignKey : 'skill_id'
        }),
        User_skill.hasMany(modelos.clientes,{
            as: 'cliente',
            foreignKey : 'user_id'
        })
    };

    return User_skill;
}