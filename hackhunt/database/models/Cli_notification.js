module.exports = (sequelize, dataTypes) =>
{
    let alias = 'cli_notificaciones';

    let cols = 
    {
        cli_id: {
            primaryKey: true,
            type: dataTypes.INTEGER 
        },
        notification_name: {
            type: dataTypes.ENUM('novedades','recomendados','destacados','resumen')
        }
    }

    const cli_notifications = sequelize.define(alias,cols,
        {
            timestamps:false,
            tableName: 'cli_notificaciones'
        })

   cli_notifications.associate = function(models)
    {
        cli_notifications.belongsTo(models.clientes,
            {
                as:'cliente_notificacion',
                foreignKey:'cli_id'
            })
    }

    return cli_notifications;
}