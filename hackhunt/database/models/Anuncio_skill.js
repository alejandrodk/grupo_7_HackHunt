Favoritosmodule.exports = (sequelize, dataTypes) => {
    const Postulantes = sequelize.define(alias,cols,{  timestamps: false});
    let alias = 'postulantes';
    let cols = {
        anuncio_id : {

        },
        skill_id : {
            
        },
        condicion : {
            
        }
    }
    return Postulantes;
}