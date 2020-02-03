Favoritosmodule.exports = (sequelize, dataTypes) => {
    const Postulantes = sequelize.define(alias,cols,{  timestamps: false});
    let alias = 'postulantes';
    let cols = {
        id : {

        },
        adv_id : {
            
        },
        cli_id : {
            
        }
    }
    return Postulantes;
}