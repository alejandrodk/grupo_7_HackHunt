module.exports = (sequelize, dataTypes) => {
    const User_skill = sequelize.define(alias,cols,{  timestamps: false});
    let alias = 'user_skills';
    let cols = {
        user_id : {

        },
        skill_id: {

        }
    }
    
    return User_skill;
}