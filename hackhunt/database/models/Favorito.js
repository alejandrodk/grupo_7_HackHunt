module.exports = (sequelize, dataTypes) => {
  
    let alias = 'favoritos';
    let cols = {
        user_id : {
            type: dataTypes.INTEGER,
        },
        adv_id : {
            type: dataTypes.INTEGER,  
        }
    }
    const Favoritos = sequelize.define(alias,cols,{  timestamps: false});
    return Favoritos;
}