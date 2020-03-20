const db = require('../../database/models');
const Sequelize = require("sequelize")
const Op = Sequelize.Op;

module.exports = {
    postulaciones : (req, res) => {

        db.postulantes.findAll()
        .then(result => {
            res.json({
                status_code : res.statusCode,
                collection : 'postulaciones',
                total_items : result.length,
                response : result
            });
        })    
    },
    postulacionesDetalle : (req, res) => {
        let { adv , id } = req.params;
        console.log(req.query)
        db.postulantes.findOne({
            where : {
                [Op.and] : [
                    { adv_id : adv },
                    { cli_id : id }
                ]
            }
        })
        .then(result => {
            if(result){
                res.json({
                    status_code : res.statusCode,
                    collection : 'postulaciones',
                    resource : 'postulacion',
                    total_items : result.length,
                    response : result
                });
            } else {
                res.json({
                    status_code : 404,
                    collection : 'postulaciones',
                    response : 'Sin resultados'
                });
            }
        })    
    },
    postulacionesCliente : (req, res) => {

        let cli_id = req.params.id

        db.postulantes.findAll({
            where : { cli_id : cli_id }
        })
        .then(result => {
            res.json({
                status_code : res.statusCode,
                collection : 'postulaciones',
                total_items : result.length,
                response : result
            });
        })    
    },
    addPostulation : (req, res) => {

        let { adv_id, cli_id } = req.body;
        
        db.postulantes.create({
            adv_id : adv_id,
            cli_id : cli_id
        })
        .then( result => {
            if(result) {
                return res.json(result);
            }

            return res.status(404).json({
                status : res.statusCode
            });
            
        }) .catch(error => res.json(error))
    },
    removePostulation : (req, res) => {
        
        let { adv_id, cli_id } = req.body;

        db.postulantes.destroy({
            where : {
                [Op.and]: [{ adv_id: adv_id }, { cli_id: cli_id }]
            }
        })
        .then( result => {
            if(result){
                return res.json(result);
            }
            return res.status(404).json({
                status : res.statusCode
            })
        }) .catch(error => res.json(error))
    },
}