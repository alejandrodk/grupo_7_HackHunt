const db = require('../../database/models');
const Sequelize = require("sequelize")
const Op = Sequelize.Op;

module.exports = {
    skills : (req, res) => {
        db.skills.findAll()
        .then( response => {
            res.json({
                status_code : res.statusCode,
                collection : 'skills',
                total_items : response.length,
                response
            });
        })
    },
    skill : (req, res) => {
        db.skills.findByPk(req.params.id)
        .then( response => {
            if(response){
            return res.json({
                    status_code : res.statusCode,
                    collection : 'skills',
                    resource : 'skill',
                    response
                });
            }
            return res.status(404).json({
                status : res.statusCode
            })
        }).catch(error => console.log(error));
    },
    create : (req, res) => {

        let { name } = req.body;

        db.skills.create({
            skill_id : 0,
            skill_name : name ,
            skill_icon : null
        })
        .then (result => {

            if(result) {
                return res.json(result);
            }

            return res.status(404).json({
                status : res.statusCode
            });
        }).catch( error => console.log(error))
    },
    delete : (req, res) => {

        let { id } = req.params;

        db.skills.destroy({
            where : {
                skill_id : id
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
    }
}