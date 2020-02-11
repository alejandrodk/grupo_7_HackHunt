const db = require('../database/models');
const actUserCv = require('../helpers/act_user_cv.js');
const controller = {
    perfil: (req, res) => {
        db.clientes.findOne({
                where: {
                    user_id: req.session.user.user_id
                },
                include: ['cliente_cv']
            })
            .then(user => {
                return res.render('cliente/perfil', {
                    user: user
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
                include : ['cliente_cv','cliente_education','cliente_experience'] })
            .then(user => {
                db.skills.findAll()
                .then(skills => {
                    db.user_skill.findAll({ where : { user_id : req.session.user.user_id } })
                    .then(user_skills => {
                        // falta agregarle los nombres de los skills
                        res.render('cliente/info', { 
                            user: user, 
                            skills : skills,
                            user_skills : user_skills
                        });
                    })
                })
            })
    },
    actInfo: (req, res) => {
        // 
        let tipoForm = req.query.form;
        let contentForm = req.body;
        let idUser = req.session.user.user_id;

        actUserCv.actualizarCv(tipoForm,contentForm,idUser);
        res.redirect('/perfil/informacion');
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