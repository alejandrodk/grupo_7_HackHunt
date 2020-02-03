module.exports = (sequelize, dataTypes) => {
    
    let alias = 'ClienteEducation';
    let cols = {
        user_id : {
            primaryKey: true,
        },
        user_cmp_experience : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_cmp_position : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_experience_since : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_experience_to : {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_experience_description: {
            type: dataTypes.STRING
        }
    }
    const Cliente_education = sequelize.define(alias,cols,{  timestamps: false});
    return Cliente_education;
}