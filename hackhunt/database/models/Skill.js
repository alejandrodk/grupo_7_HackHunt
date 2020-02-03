module.exports = (sequelize, dataTypes) => {
    const Skill = sequelize.define(alias,cols,{  timestamps: false});
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
    return Skill;
}