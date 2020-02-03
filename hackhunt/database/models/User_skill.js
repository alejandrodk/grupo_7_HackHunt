module.exports = (sequelize, dataTypes) => {
    
    let alias = 'user_skills';
    let cols = {
        user_id : {

        },
        skill_id: {

        }
    }
    const User_skill = sequelize.define(alias,cols,{  timestamps: false});
    return User_skill;
}