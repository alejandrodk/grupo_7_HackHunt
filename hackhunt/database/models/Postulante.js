module.exports = (sequelize, dataTypes) => {
    
    let alias = 'postulantes';
    let cols = {
        id : {

        },
        adv_id : {
            
        },
        cli_id : {
            
        }
    }
    const Postulantes = sequelize.define(alias,cols,{  timestamps: false});
    return Postulantes;
}