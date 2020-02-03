module.exports = (sequelize, dataTypes) => {
   
    let alias = 'postulantes';
    let cols = {
        anuncio_id : {
            

        },
        skill_id : {
            
        },
        condicion : {
            
        }
    }
    

    const Postulantes = sequelize.define(alias,cols,{  timestamps: false});
    return Postulantes;
}