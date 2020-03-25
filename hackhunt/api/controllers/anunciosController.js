const db = require('../../database/models');
const Sequelize = require("sequelize")
const Op = Sequelize.Op;

const dateHelper = require('../helpers/date');
const helpers = require('../helpers/apiHelpers');

module.exports = {
    anuncios : (req, res) => {
        let actualPage = req.query.page ? req.query.page : 0;

        let fecha = dateHelper.getDate;

        let page = req.query.page != undefined ? req.query.page : 0;
        let maxResults = 4;
        let offset = page != 0 ? maxResults * parseInt(page) : 0 ;
        let limit = maxResults;

        if(req.query.page == undefined){
            // si no se recibe la query "page" traer todos los resultados
            offset = 0;
            limit = 100
        }

        db.anuncios.findAll({
            include : [{ model : db.empresas , as: 'empresas', attributes: ['cmp_name','cmp_avatar'] } ],
            offset,
            limit
        })
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
                    next : actualPage <= response.length / maxResults ? `http://localhost:3000/api/anuncios?page=${ parseInt(actualPage) + 1 }` : null,
                    prev : actualPage > 0 ? `http://localhost:3000/api/anuncios?page=${ parseInt(actualPage) - 1 }` : null,
                    response
                });
            }
            return res.status(404).json({
                status : res.statusCode
            })
        }).catch(error => console.log(error))
    },
    activos : (req, res) => {

        let fecha = dateHelper.getDate;

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

        let fecha = dateHelper.getDate;

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