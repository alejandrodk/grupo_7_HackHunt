module.exports = (sequelize, dataTypes) => {
    
    let alias = 'favoritos';
    let cols = {
        id : {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        user_id : {
            type: dataTypes.INTEGER,
/*             allowNull: false */
        },
        adv_id : {
            type: dataTypes.INTEGER,
/*             allowNull: false */
        }
    }
    const Favoritos = sequelize.define(alias,cols,{  timestamps: false, tableName: 'favoritos'});

    /* Favoritos.associate = function(modelos){
        Favoritos.hasMany(modelos.clientes,{
            as: 'cliente',
            foreignKey : 'user_id'
        }),
        Favoritos.hasMany(modelos.anuncios,{
            as: 'anuncio',
            foreignKey : 'adv_id'
        })
    };
 */
    return Favoritos;
}