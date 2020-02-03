module.exports = (sequelize, dataTypes) => {
    const User_skill = sequelize.define(alias,cols,{  timestamps: false});
    let alias = 'user_skills';
    let cols = {
        user_id : {
            type: dataTypes.INTEGER,
            references: {
                model: cliente,
                key: id
            }
        },
        skill_id: {
            type: dataTypes.INTEGER,
            references: {
                model: skill,
                key: skill_id
            }
        }
    }
    return User_skill;
}