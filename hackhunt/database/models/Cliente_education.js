module.exports = (sequelize, dataTypes) => {
    const Cliente_education = sequelize.define(alias,cols,{  timestamps: false});
    let alias = 'ClienteEducation';
    let cols = {
        user_id : {
            primaryKey: true,
        },
        user_career : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_institution : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_career_title : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_career_since : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_career_to : {
            type: dataTypes.STRING
        },
        user_career_description : {
            type: dataTypes.STRING
        }
    }
    const Cliente_education = sequelize.define(alias,cols,{  timestamps: false});
    return Cliente_education;
}