
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
        cmp_user_gender: {
            type: dataTypes.STRING,
        },
        cmp_user_dni:
        {
            type: dataTypes.INTEGER,
        },
        cmp_user_datebirth: {
            type: dataTypes.STRING,
            
        },
        cmp_user_email: {
            type: dataTypes.STRING,
            allowNull: false
        },

        cmp_user_passwd: {
            type: dataTypes.STRING,
            allowNull: false
        },
        cmp_user_phone:{
            type: dataTypes.STRING
        },
        cmp_user_city:{
            type: dataTypes.STRING,
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
        cmp_website: {
            type: dataTypes.STRING
        },
        cmp_linkedin: {
            type: dataTypes.STRING
        },
        cmp_facebook: {
            type: dataTypes.STRING
        },
        cmp_instagram: {
            type: dataTypes.STRING
        },

        cmp_avatar: {
            type: dataTypes.STRING
        },
        cmp_description: 
        {
            type:dataTypes.TEXT
        }
      
    }
    
    const empresa = sequelize.define(alias,cols,{  timestamps: false});

    empresa.associate = function(models)
    {
        empresa.hasMany(models.anuncios,{
            as: "anuncios",
            foreignKey: "cmp_id"
        });
    }

    return empresa;
}