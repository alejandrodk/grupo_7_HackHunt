
const dbFunctions = require('../helpers/readjson.js');
const db = require('../database/models');
const sequelize = require('sequelize');
const bcrypt = require('bcrypt');

const controller = {
    perfil: (req, res) => {
        let empresa;
        let fecha = new Date()
            .toLocaleDateString()
            .slice(0, 10)
            .split('-');
        if (fecha[1] < 10) {
            fecha[1] = "0" + fecha[1];
        }
        fecha = fecha[0] + '-' + fecha[1] + '-' + fecha[2];
        
     
        db
            .empresas
            .findByPk(req.session.user.id, {
                attributes: {
                    exclude: ['cmp_user_passwd'],
    
                }
            })
            .then(result => {
                empresa = result;
                return result.getAnuncios();

            })
            .then(resultado => {
                db.sequelize.query(`select count(adv_date_contract) as finalizados from anuncios where adv_date_contract < '${fecha}' and cmp_id = ${req.session.user.id}`,{type: sequelize.QueryTypes.SELECT})
                .then(finalizados =>
                    {
                       
                        return res.render("empresa/perfil", {
                            empresa: empresa,
                            anuncios: resultado,
                            finalizados:finalizados[0]
                        });
                    })
                   
            })

    },
    configuracion: (req, res) => {
        db
            .empresas
            .findByPk(req.session.user.id)
            .then(resultado => res.render('empresa/config', {empresa: resultado}))

    },

    actualizarConfiguracion: (req, res) => {

        db
            .empresas
            .findByPk(req.session.user.id, {
                attributes: ['id', 'cmp_user_email', 'cmp_user_passwd']
            })
            .then(resultado => {
                if (req.body.cmp_user_email) {
                    delete resultado
                        .cmp_passwd
                        resultado
                        .update(req.body)
                        .then(resu => res.render('empresa/config', {empresa: resu}))
                }
                if (req.body.cmp_user_passwd) {

                    if (bcrypt.compareSync(req.body.cmp_user_oldPasswd, resultado.cmp_user_passwd)) {

                        if (req.body.cmp_user_passwd === req.body.cmp_user_repPasswd) {
                            req.body.cmp_user_passwd = bcrypt.hashSync(req.body.cmp_user_passwd, 12);
                            resultado
                                .update({cmp_user_passwd: req.body.cmp_user_passwd})
                                .then(resu => res.render('empresa/config', {empresa: resu}))
                        } else {
                            res.render('empresa/config', {
                                empresa: resultado,
                                error: "Error al cambiar la contraseña"
                            })
                        }
                    } else {
                        res.render('empresa/config', {
                            empresa: resultado,
                            error: "Error al cambiar la contraseña"
                        })
                    }
                }

            })

    },

    info: (req, res) => {
        db
            .empresas
            .findByPk(req.session.user.id)
            .then(empresa => {
                delete empresa.cmp_user_passwd;
                res.render("empresa/info", {
                    empresa: empresa,
                    title: "Express"
                });
            })
    },
    modificarInfo: (req, res) => {
        if (req.file) {
            req.body.cmp_avatar = req.file.filename;
        }
        db
            .empresas
            .update(req.body, {
                where: {
                    id: req.session.user.id
                }
            })
            .then(() => {

                return res.redirect('/empresa/informacion');
            })

    },
    mensajes: (req, res) => {
        res.render("empresa/mensajes", {title: "Express"});
    },
    anuncios: (req, res) => {
        let query = "";
        let fecha = new Date()
            .toLocaleDateString()
            .slice(0, 10)
            .split('-');
        if (fecha[1] < 10) {
            fecha[1] = "0" + fecha[1];
        }
        fecha = fecha[0] + '-' + fecha[1] + '-' + fecha[2];
        //{adv_date_contract:{[Op.gte]:Sequelize.fn('NOW')}}
        switch (req.query.filter) {
            case "new":

                query = `
		select adv.*, cmp.cmp_avatar
		from anuncios as adv
		inner join postulantes as postu on adv.id = postu.adv_id
		inner join empresas as cmp on adv.cmp_id = cmp.id
		where adv.cmp_id = ${req.session.user.id} and postu.visto is null group by adv.id order by adv.id asc
		`
                break;
            case "active":

                query = `
				select adv.*, cmp.cmp_avatar
				from anuncios as adv
				left outer join postulantes as postu on adv.id = postu.adv_id
				inner join empresas as cmp on adv.cmp_id = cmp.id
				where adv.cmp_id = ${req.session.user.id} and adv_date_contract > '${fecha}' group by adv.id order by adv.id asc`
                break;

            case "closed":
                query = `
				select adv.*, cmp.cmp_avatar
				from anuncios as adv
				left outer join postulantes as postu on adv.id = postu.adv_id
				inner join empresas as cmp on adv.cmp_id = cmp.id
				where adv.cmp_id = ${req.session.user.id} and adv_date_contract < '${fecha}' group by adv.id order by adv.id asc`
                break;

            default:
                query = `
				select adv.*, cmp.cmp_avatar
				from anuncios as adv
				left outer join postulantes as postu on adv.id = postu.adv_id
				inner join empresas as cmp on adv.cmp_id = cmp.id
				where adv.cmp_id = ${req.session.user.id} group by adv.id order by adv.id asc`
                break;
        }

        db
            .sequelize
            .query(query, {type: sequelize.QueryTypes.SELECT})
            .then(result => {

                //return res.send(result)

                db
                    .sequelize
                    .query(
                        `select b.id, b.adv_id, b.visto from clientes as a 
				  inner join postulantes as b on a.user_id = b.cli_id 
				  inner join anuncios as c on b.adv_id = c.id inner join empresas as d on c.cmp_id = d.id where d.id = ${req.session.user.id}`,
                        {type: sequelize.QueryTypes.SELECT}
                    )
                    .then(resultado => {

                        //return res.send(result)
                        res.render("empresa/anuncios", {
                            anuncios: result,
                            postulaciones: resultado
                        });
                    })
            })

 

    },
    anuncioDetalle: (req, res) => {
        res.render("empresa/anuncioDetalle", {title: "Express"});
    },
    crearPublicacion: (req, res) => {
        db
            .skills
            .findAll()
            .then(skills => {
                db
                    .anuncios
                    .findAll({
                        raw: true,
                        where: {
                            cmp_id: req.session.user.id
                        },
                        attributes: {
                            include: [
                                db
                                    .Sequelize
                                    .col("empresas.cmp_avatar")
                            ]
                        },
                        include: [
                            {
                                model: db.empresas,
                                as: "empresas",
                                attributes: []
                            }
                        ]
                    })
                    .then(anuncios => {

                        res.render("empresa/crearPublicacion", {
                            title: "Express",
                            skills: skills,
                            anuncios: anuncios
                        });
                    })
            })
    },

    postearPublicacion: (req, res) => {

        db
            .empresas
            .findByPk(req.session.user.id)
            .then(empresa => {

                let fecha = new Date()
                    .toLocaleDateString()
                    .slice(0, 10)
                    .split('-');
                req.body.adv_publication = fecha[2] + '/' + fecha[1] + '/' + fecha[0];
                let skills = req.body.elskill;
                delete req.body.adv_skills;
                db
                    .anuncios
                    .create(req.body)
                    .then(anuncio => {
                        empresa.addAnuncios(anuncio)
                        return anuncio
                    })
                    .then(anuncio => {
                        for (let i = 0; i < skills.length; i++) {

                            anuncio.addAdv_skills(skills[i])
                        }

                    })
                    .then(() => {
                        return res.redirect('/empresa/perfil');

                    })
            })
            .catch(err => {
                console.log(err);

            })

           
        },
    modificarPerfil: (req, res) => {
        let user = dbFunctions.modifyCompany(req.session.user_id);
        //aca van los datos para modificar
        dbFunctions.saveUpdates(user);
        return res.redirect('/perfil');

    },
    modificarPublicacion: (req, res) => {
        let anuncios;
        db
            .anuncios
            .findByPk(req.params.id, {include: ['adv_skills']})
            .then(resultado => {
                anuncios = resultado;
                db
                    .skills
                    .findAll()
                    .then(skills => {

                        res.render("empresa/modificarPublicacion", {
                            publicacion: anuncios,
                            skills: skills,
                            title: "Express"
                        })
                    })
            })
    },
    adv_modificarSkills: (req, res) => {},
    actualizarPublicacion: (req, res) => {
        // actualizar info en la DB y enviar a la vista previa

        db
            .anuncios
            .findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(anuncio => {
                for (let i = 0; i < req.body.elskill.length; i++) {

                    anuncio.addAdv_skills(req.body.elskill[i]);
                }
                delete req.body.elskill;
                anuncio.update(req.body);
                return res.redirect("/empresa/perfil");
            })
    },

    borrarPublicacion: (req, res) => {
        db
            .anuncios
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(() => {

                return res.redirect("/empresa/perfil");
            })
    },
    postulantes: (req, res) => {
        /* buscamos el anuncio segun el id por parametro.
		   a la busqueda se incluye los clientes que se postularon, y datos adicionales a estos como los skills y la experiencia.
		*/
        db
            .anuncios
            .findByPk(req.params.id, {
                include: [
                    {
                        model: db.clientes,
                        as: 'candidatos',
                        attributes: [
                            'user_id', 'user_name', 'user_lastname', 'user_email', 'user_avatar'
                        ],
                        include: [
                            {
                                model: db.cliente_education,
                                as: 'cliente_education',
                                attributes: ['user_career']
                            }, {
                                model: db.cliente_experience,
                                as: 'cliente_experience',
                                attributes: ['user_experience_description']
                            }, {
                                model: db.skills,
                                as: 'skill'
                            }
                        ]
                    }, {
                        model: db.empresas,
                        as: 'empresas',
                        attributes: ['cmp_name', 'cmp_avatar']
                    }, {
                        model: db.skills,
                        as: 'adv_skills'
                    }
                ]
            })
            .then(resultado => {
                //return res.send(resultado)
                res.render("empresa/postulantes", {
                    title: "Express",
                    anuncio: resultado
                });
            })
    },
    postulantesDetalle: (req, res) => {
        let id = req.query.id;
        let adv_id = req.query.adv;
        // traer info de usuario de DB segun su ID y guardarlo agrupado en objetos
        // literales
        db
            .clientes
            .findByPk(id, {
                include: [
                    {
                        model: db.cliente_cv,
                        as: 'cliente_cv'
                    }, {
                        model: db.cliente_education,
                        as: 'cliente_education'
                    }, {
                        model: db.cliente_experience,
                        as: 'cliente_experience'
                    }, {
                        model: db.skills,
                        as: 'skill'
                    }, {
                        model: db.anuncios,
                        as: 'candidato'
                    }
                ],
                attributes: ['user_email', 'user_avatar', 'user_name', 'user_lastname']
            })
            .then(resultado => {

                if (resultado.cvVisto(adv_id, id)) {

                    res.render("empresa/cv", {cliente: resultado});
                } else {

                    db
                        .sequelize
                        .query(
                            `update postulantes as d set visto = 1  where d.adv_id = ${adv_id} and d.cli_id = ${id} `
                        )
                        .then(() => {

                            res.render("empresa/cv", {cliente: resultado});
                        })
                }

            })

    },

    prueba: (req, res) => {}
};

module.exports = controller;
