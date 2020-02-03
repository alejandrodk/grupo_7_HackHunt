module.exports = (sequelize, dataTypes) => {
    const Anuncios = sequelize.define(alias,cols,{  timestamps: false});
    let alias = 'anuncios';
    let cols = {
        adv_id : {

        },
        adv_cmp : {
            type: dataTypes.STRING,
            allowNull: false
        },
        adv_publication : {
            type: dataTypes.DATE,
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
        adv_skills : {
            type: dataTypes.STRING,
            allowNull: false
        },
        adv_skills_optionals : {
            type: dataTypes.STRING,
            allowNull: false
        },
        adv_date_contract : {
            type: dataTypes.DATE,
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
    return Anuncios;
}