module.exports = (sequelize, dataTypes) => {
    
    let alias = 'cmpFavoritos';
    let cols = {
        id : {
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        user_id : {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        cmp_id : { 
            // cambie la foreignKey para la relacion en perfil/empresas
            primaryKey: true,
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }
    const Favoritos = sequelize.define(alias,cols,{  timestamps: false, tableName: 'cmpFavoritos'});
    Favoritos.associate = function(models){

        Favoritos.hasMany(models.empresas, {
            as: 'empresas',
            foreignKey : 'id'
        })
    }
    return Favoritos;
}