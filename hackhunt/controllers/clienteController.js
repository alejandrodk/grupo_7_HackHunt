const db = require('../database/models');
const actUserCv = require('../helpers/act_user_cv.js');
const controller = {
    perfil: (req, res) => {
        db.clientes.findOne({ where: { user_id: req.session.user.user_id },
            include: ['cliente_cv'] })
            .then(user => {
                db.postulantes.findAll({ where : { cli_id : user.user_id },
                include: ['anuncios']})
                    .then(postulaciones => {
                        //return res.send(postulaciones)
                        return res.render('cliente/perfil', {
                            user: user,
                            anuncios: postulaciones
                        })
                    })
            })
            .catch(error => {
                return res.send(error)
            })

    },
    postulaciones: (req, res) => {
        res.render('cliente/postulaciones', {
            title: 'Postulaciones'
        });
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
                include : ['cliente_cv','cliente_education', 'skill'] })
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
        res.render('cliente/config', {
            title: 'Config'
        });
    },
    actConfig: (req, res) => {
        // consultar DB y traer la info en los inputs que apliquen
        // actualizar informacion en la DB
        res.redirect('/perfil/configuracion');
    },

};

module.exports = controller;