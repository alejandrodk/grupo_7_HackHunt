module.exports = (sequelize, dataTypes) => {
    
    let alias = 'postulantes';
    let cols = {
        id : {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        adv_id : {
            type: dataTypes.INTEGER,
            allowNull:false
        },
        cli_id : {
            type: dataTypes.INTEGER,
            allowNull:false 
        }
    }
    const Postulantes = sequelize.define(alias,cols,{  timestamps: false});
    return Postulantes;
}