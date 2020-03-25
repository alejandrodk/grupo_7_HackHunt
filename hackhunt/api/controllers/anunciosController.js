const db = require('../../database/models');
const Sequelize = require("sequelize")
const Op = Sequelize.Op;

module.exports = {
    anuncios : (req, res) => {
        let date = new Date();
        let dd = date.getDate();
        let mm = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        let yyyy = date.getFullYear();

        let fecha = `${yyyy}-${mm}-${dd}`

        db.anuncios.findAll()
        //db.sequelize.query(`select * from anuncios where adv_date_contract > '${fecha}'`)
        .then(response => {
            if(response){
                let actives = response.filter(item => item.adv_date_contract > fecha);
                let expired = response.filter(item => item.adv_date_contract < fecha);

                return res.json({ 
                    status_code : res.statusCode,
                    collection : 'anuncios',
                    total_items : response.length,
                    actives : actives.length,
                    expired : expired.length,
                    response
                });
            }
            return res.status(404).json({
                status : res.statusCode
            })
        }).catch(error => console.log(error))
    },
    activos : (req, res) => {
        let date = new Date();
        let dd = date.getDate();
        let mm = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        let yyyy = date.getFullYear();

        let fecha = `${yyyy}-${mm}-${dd}`

        db.sequelize.query(`select * from anuncios where adv_date_contract > '${fecha}'`)
        .then(response => {
            if(response){

                return res.json({ 
                    status_code : res.statusCode,
                    collection : 'anuncios',
                    resources : 'activos',
                    total_items : response.length,
                    response
                });
            }
            return res.status(404).json({
                status : res.statusCode
            })
        }).catch(error => console.log(error))
    },
    expirados : (req, res) => {
        let date = new Date();
        let dd = date.getDate();
        let mm = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        let yyyy = date.getFullYear();

        let fecha = `${yyyy}-${mm}-${dd}`

        db.sequelize.query(`select * from anuncios where adv_date_contract < '${fecha}'`)
        .then(response => {
            if(response){

                return res.json({ 
                    status_code : res.statusCode,
                    collection : 'anuncios',
                    resources : 'expirados',
                    total_items : response.length,
                    response
                });
            }
            return res.status(404).json({
                status : res.statusCode
            })
        }).catch(error => console.log(error))
    }
}