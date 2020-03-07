module.exports = (sequelize, dataTypes) => {
    
    let alias = 'userFavoritos';
    let cols = {
        id : {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        user_id : {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        adv_id : {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }
    const Favoritos = sequelize.define(alias,cols,{  timestamps: false, tableName: 'favoritos'});

    return Favoritos;
}