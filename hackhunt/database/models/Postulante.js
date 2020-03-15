module.exports = (sequelize, dataTypes) => {
    
    let alias = 'postulantes';
    let cols = {
        id : {
            primaryKey: true,
            autoIncrement : true,
            type: dataTypes.INTEGER
        },
        adv_id : {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        cli_id : {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        visto: dataTypes.STRING
    }
    const postulante = sequelize.define(alias,cols,{  timestamps: false, tableName: 'postulantes'});

    postulante.associate = function(modelos){
        postulante.belongsToMany(modelos.anuncios,{
            as : 'anuncios',
            through : 'postulantes',
            foreignKey : 'adv_id',
            otherKey : 'cli_id',
            timestamps : false
        }),
        postulante.belongsToMany(modelos.clientes,{
            as : 'clientes',
            through : 'postulantes',
            foreignKey : 'cli_id',
            otherKey : 'adv_id',
            onDelete: 'cascade',
            timestamps : false
        })
    };

    return postulante;
}