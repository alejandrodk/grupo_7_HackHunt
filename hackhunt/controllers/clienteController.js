const db = require('../database/models');
const sequelize = db.sequelize;
const actUserCv = require('../helpers/act_user_cv.js');

const controller = {
    perfil: (req, res) => {
        db.clientes.findOne({ where: { user_id: req.session.user.user_id },
            include: ['cliente_cv'] })
            .then(user => {
                sequelize.query(`SELECT * FROM postulantes JOIN anuncios ON postulantes.adv_id = anuncios.id HAVING cli_id = ${user.user_id}`)
                .then(result => {
                    //res.send(result)
                    res.render('cliente/perfil',{
                        user : user,
                        anuncios : result[0]
                    })
                })
            })
            .catch(error => {
                return res.send(error)
            })

    },
    postulaciones: (req, res) => {
        db.clientes.findOne({ where: { user_id: req.session.user.user_id },
            include: ['cliente_cv'] })
            .then(user => {
                sequelize.query(`SELECT * FROM postulantes JOIN anuncios ON postulantes.adv_id = anuncios.id JOIN empresas ON anuncios.cmp_id = empresas.id HAVING cli_id = ${user.user_id}`)
                .then(result => {
                    //res.send(result)
                    res.render('cliente/postulaciones',{
                        anuncios : result[0]
                    })
                })
            })
            .catch(error => {
                return res.send(error)
            })
    },
    favoritos: (req, res) => {
        if (req.query) {
            //si existe el queryString refinar la busqueda por empresa
        }
        res.render('cliente/favoritos', {
            title: 'Favoritos'
        });
    },
    alertas: (req, res) => {
        if (req.query) {
            //si existe el queryString refinar la busqueda por empresa
        }
        res.render('cliente/alertas', {
            title: 'Alertas '
        });
    },
    info: (req, res) => {
        db.clientes.findOne({ where: { user_id: req.session.user.user_id },
                include : ['cliente_cv','cliente_education', 'cliente_experience' ,'skill'] })
            .then(user => {
                db.skills.findAll()
                .then(skills => {
                    res.render('cliente/info', { 
                        user: user, 
                        skills : skills,
                    });
                })
            })
    },
    actInfo: (req, res) => {
        // 
        let tipoForm = req.query.form;
        let contentForm = req.body;
        let idUser = req.session.user.user_id;

        let urlAncla = actUserCv.actualizarCv(tipoForm,contentForm,idUser);
        res.redirect('/perfil/informacion' + urlAncla);
    },
    borrarSkill : (req, res) => {
        db.user_skill.destroy({
            where : {
                skill_id : req.params.skill_id,
                user_id : req.session.user.user_id
            }
        })
        res.redirect('/perfil/informacion#Skills');
    },
    mensajes: (req, res) => {
        res.render('cliente/mensajes', {
            title: 'Mensajes'
        });
    },
    configuracion: (req, res) => {
        db.clientes.findOne({ where : { user_id : req.session.user.user_id}})
        .then(user => {
            res.render('cliente/config', {
                user
            });
        })
    },
    actConfig: (req, res) => {
        let tipoForm = req.query.form;
        let contentForm = req.body;
        let idUser = req.session.user.user_id;
        db.clientes.findOne({where: { user_id : req.session.user.user_id}})
        .then(result => {
            let urlAncla = actUserCv.actualizarConfig(tipoForm,contentForm,idUser,result.user_passwd,res);
            res.redirect('/perfil/configuracion/' + urlAncla);
        })
    },

};

module.exports = controller;