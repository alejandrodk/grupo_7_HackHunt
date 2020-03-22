const db = require('../../database/models');
const Sequelize = require("sequelize")
const Op = Sequelize.Op;

module.exports = {
    clientes : (req, res) => {

    },
    cliente : (req, res) => {

    },
    skills : (req, res) => {
        let id = req.params.id;

        db.clientes.findOne({
            where : { user_id : id },
            attributes : ['user_id'],
            include : [{ model: db.skills, as: 'skill', attributes : ['skill_name'], raw: true }],
        })
        .then(response => {
            if(response){
            return res.json({
                    status_code : res.statusCode,
                    collection : 'clientes',
                    resource : 'skills',
                    cliente : id,
                    response
                });
            }
            return res.status(404).json({
                status : res.statusCode
            })
        }).catch(error => console.log(error))
    },
    addSkill : (req, res) => {
        let { user_id, skill_id } = req.body;

        db.user_skill.create({
            id : 0,
            user_id : user_id,
            skill_id : skill_id
        })
        .then(response => {
            if(response){
            return res.json(response);
            }
            return res.status(404).json({
                status : res.statusCode
            })
        }).catch(error => console.log(error))
    },
    deleteSkill : (req, res) => {
        let { id, user_id, skill_id } = req.body;
        
        db.user_skill.destroy({
            where : {
                user_id : user_id,
                skill_id : skill_id
            }
        })
        .then(response => {

            return res.json(response)
            
        }).catch(error => res.send(error))
    }
}