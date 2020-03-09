module.exports = (sequelize, dataTypes) => {
    
    let alias = 'userFavoritos';
    let cols = {
        id : {
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        user_id : {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        adv_id : {
            // cambie la foreignKey para la relacion en perfil/anuncios
            primaryKey: true,
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }
    const Favoritos = sequelize.define(alias,cols,{  timestamps: false, tableName: 'favoritos'});
    Favoritos.associate = function(models){

        Favoritos.hasMany(models.anuncios, {
            as: 'anuncios',
            foreignKey : 'id'
        })
    }
    return Favoritos;
}