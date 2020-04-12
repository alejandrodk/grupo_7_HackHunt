const db = require('../../database/models');
const Sequelize = require("sequelize")
const Op = Sequelize.Op;

module.exports = {
    clientes : (req, res) => {
        db.clientes.findAll()
        .then(response => {
            if(response){
            response.map(item => item.user_avatar = `http://localhost:3000/images/avatars/${item.user_avatar}`)
            return res.json({
                    status_code : res.statusCode,
                    collection : 'clientes',
                    total_items : response.length,
                    response
                });
            }
            return res.status(404).json({
                status : res.statusCode
            })
        }).catch(error => console.log(error))

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
    },

    check:(req,res) =>
    {
        let email = req.query.check;
        
        db.clientes.findOne({where:{user_email:email}})
        .then(respuesta =>
            {
                if(respuesta)
                {

                    return res.json({response:respuesta})
                }
                else
                {
                    return res.status(404).json({status_code:res.statusCode})
                }
            })
        
    },

    storeNotification: (req,res) => 
    {
        let email = req.body.email;
        let input = req.body.input_form;
        let value = req.body.input_value;
        //comenzamos solo si llega por body un email
        if(email)
        {
            let data = 
        {
            cli_id:0,
            notification_name: input
        }
        //obtenemos el id del cliente por medio del email y lo guardamos en DATA
        db.clientes.findOne({where:{user_email:email},attributes:['user_id']})
        .then(respuesta =>
            {
                if(respuesta)
                {
                    data.cli_id = respuesta.user_id;
                }
                //si el valor del check es true/checked se guardarán datos en la db
                if(value)
                {
                    db.cli_notificaciones.create(data)
                    .then(respuesta =>
                         {
                            if(respuesta)
                             {
                                return res.status(200).json(
                                    {
                                        status:res.statusCode,
                                        response:"Data saved"
                                    }
                                )
                             }
                         })
                }
                else //si el valor del check es false/uncheked se borrará el registro de la db
                {
                    db.cli_notificaciones.destroy({where:[{cli_id:data.cli_id},{notification_name:data.notification_name}]})
                    .then(respuesta_destroy =>
                        {
                            if(respuesta_destroy)
                            {
                                return res.status(200).json(
                                    {
                                        status:res.statusCode,
                                        response:"deleted"
                                    }
                                )
                            }
                            else //si no se encontraron datos en la db
                            {
                                return res.status(400).json(
                                    {
                                        status:res.statusCode,
                                        error: "No data Found"
                                    }
                                )
                            }
                        })
                }        
            })
        }
    },

    getNotificaciones: (req,res) =>
    {
        
        if(req.session.user.user_id)
        {
            let id = req.session.user.user_id;
            db.cli_notificaciones.findAll({where:{cli_id:id}})
            .then(respuesta => 
            {
                if(respuesta)
                {
                    console.log("la respuesta es: " + respuesta)
                    return res.json(
                        {
                            status:res.statusCode,
                            response:respuesta,
                        }
                    )
                }
                else
                {
                    return res.status(404).json(
                        {
                            status:res.statusCode,
                            error:"Data not found"
                        }
                    )
                }
            })
        }else{
        return res.status(404).json(
            {
                status:res.statusCode,
                error:"Error en los datos"
            })}
    }
}