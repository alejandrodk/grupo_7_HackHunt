
module.exports = (sequelize, dataTypes) =>
{
    let alias = "empresas";
    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },

        cmp_user_name: {
            type: dataTypes.STRING,
            allowNull: false
        },

        cmp_user_lastname: {
            type: dataTypes.STRING,
            allowNull: false
        },

        cmp_user_email: {
            type: dataTypes.STRING,
            allowNull: false
        },

        cmp_user_passwd: {
            type: dataTypes.STRING,
            allowNull: false
        },

        cmp_name: {
            type: dataTypes.STRING,
            allowNull: false
        },

        cmp_cuit: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        cmp_tel: {
            type: dataTypes.INTEGER
        },
        
        cmp_sector: {
            type: dataTypes.STRING,
            allowNull: false
        },

        cmp_avatar: {
            type: dataTypes.STRING
        },
      
    }
    
    const Empresa = sequelize.define(alias,cols,{  timestamps: false});

    Empresa.associate = function(modelos)
    {
        Empresa.hasMany(modelos.anuncios,{
            as: "anuncios",
            foreignKey: "cmp_id"
        });
    }

    return Empresa;
}