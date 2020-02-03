module.exports = (sequelize, dataTypes) => {
  
    let alias = 'favoritos';
    let cols = {
        user_id : {
            
        },
        adv_id : {
            
        }
    }
    const Favoritos = sequelize.define(alias,cols,{  timestamps: false});
    return Favoritos;
}