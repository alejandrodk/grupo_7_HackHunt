module.exports = (sequelize, dataTypes) => {
    
    let alias = 'user_skills';
    let cols = {
        user_id : {
            type: dataTypes.INTEGER,
        },
        skill_id: {
            type: dataTypes.INTEGER,
        }
    }
    const User_skill = sequelize.define(alias,cols,{  timestamps: false});
    return User_skill;
}