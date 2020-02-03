module.exports = (sequelize, dataTypes) => {
    const Favoritos = sequelize.define(alias,cols,{  timestamps: false});
    let alias = 'favoritos';
    let cols = {
        user_id : {
            
        },
        adv_id : {
            
        }
    }
    return Favoritos;
}