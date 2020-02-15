module.exports = (sequelize, dataTypes) => 
{
    let alias = "infoEmpresas";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },


    }

    const empresaInfo = sequelize.define(alias,cols);
    return empresaInfo;
}