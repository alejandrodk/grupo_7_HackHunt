module.exports = (sequelize, dataTypes) => {
   
    let alias = 'postulantes';
    let cols = {
        anuncio_id : {
            
            type: dataTypes.INTEGER,
            allowNull:false
        },
        skill_id : {
            type: dataTypes.INTEGER,
            allowNull:false
        },
        condicion : {
            type: dataTypes.STRING
        }
    }
    

    const Postulantes = sequelize.define(alias,cols,{  timestamps: false});
    return Postulantes;
}