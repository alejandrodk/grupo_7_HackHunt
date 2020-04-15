const db = require('../database/models');
const Sequelize = require("sequelize")
const sequelize = db.sequelize;
const Op = Sequelize.Op;

const actUserCv = require('../helpers/act_user_cv.js');

const controller = {

    perfil: (req, res) => {
        const sessionId = req.session.user.user_id;
            db.clientes.findOne({where: {user_id: req.session.user.user_id},
                include: [
                    {model:db.cliente_cv,as:'cliente_cv'},
                    {model:db.skills, as:'skill'}
                ]
                })
                .then(cliente =>{
                 db.anuncios.findAll(
                     {
                        include:[
                           {model:db.clientes, as:"candidatos", where:{user_id: req.session.user.user_id}},
                           {model:db.skills, as:"adv_skills"}]
                     }
                 )
                .then(misAnuncios => { 
                    db.anuncios.findAll({
                        limit:3,
                        attributes:['id','adv_title','adv_publication'],
                        include:[{model:db.skills,as:"adv_skills"}]
                    })
                    .then(relacionados => {
                        db.postulantes.findAll({
                            where : {
                                cli_id : req.session.user.user_id,
                                visto : 1
                            }, 
                            attributes : [
                                [sequelize.fn('COUNT', sequelize.col('visto')), 'visto']
                            ]
                        })
                        .then( vistos => {
                            res.render('cliente/perfil',{
                                
                                 user:cliente,
                                 postulaciones:misAnuncios,
                                 relacionados,
                                 vistos
                             })
                        })
                    })
            })
        })
    },
    postulaciones: (req, res) => {
        db.clientes.findOne({
                where: {
                    user_id: req.session.user.user_id
                },
                include: [
                    'cliente_cv', 
                    { model: db.anuncios, as: "candidato", 
                        include: [
                            { model: db.empresas, as: "empresas", attributes: ['cmp_avatar', 'cmp_name'] }, 
                            { model: db.skills, as: "adv_skills" }
                        ]
                    }, { model: db.skills, as: "skill"}
                ]
            })
            .then(user => {
                sequelize
                    .query(
                        `SELECT * FROM postulantes JOIN anuncios ON postulantes.adv_id = anuncios.id JOIN empresas ON anuncios.cmp_id = empresas.id HAVING cli_id = ${user.user_id}`
                    )
                    .then(result => {

                        let noVistos = result[0].filter( adv => adv.visto === null);

                        let stats = {
                            vistos : result[0].length - noVistos.length,
                            noVistos : noVistos.length,
                            totales : result[0].length
                        }

                        res.render('cliente/postulaciones', {
                            anuncios: result[0],
                            stats,
                            usuario: user
                        })
                    })
            })
            .catch(error => {
                return res.send(error)
            })
        },
    favoritos: (req, res) => {
        db.clientes.findOne({
            where:{user_id:req.session.user.user_id},
            include:[{model:db.skills,as:'skill'},
                     {model:db.anuncios,as:"favoritos",include:[
                        {model:db.empresas,as:"empresas",attributes:['id','cmp_name','cmp_avatar']},
                        {model:db.skills,as:"adv_skills"}
                    ]}]
                })
        .then( user => { 
            res.render('cliente/favoritos', {
                user
            });
        })
    },
    seguidos: (req, res) => {
        db.cmpFavoritos.findAll({
            where : {
                user_id : req.session.user.user_id
            },
            attributes : ['cmp_id'],
            include : [{model : db.empresas, as: 'empresas', attributes : ['cmp_name','cmp_avatar']}]
        })
        .then( seguidos => {

            let queryWhere = []

            for(let cmp of seguidos){
                queryWhere.push({cmp_id: {[Op.like]: '%'+ cmp.cmp_id +'%' }})
            }
            db.anuncios.findAll({
                where : {
                    [Op.or]: [...queryWhere]
                },
                include : [{model : db.empresas, as: 'empresas', attributes : ['cmp_name','cmp_avatar']}]
            })
            .then( anuncios => {

                res.render('cliente/seguidos', {
                    seguidos,
                    anuncios
                });
            })
        })
    },
    info: (req, res) => {
        db.clientes.findOne({
            where: {
                user_id: req.session.user.user_id
            },
            include: ['cliente_cv', 'cliente_education', 'cliente_experience', 'skill']
        })
        .then(user => {
            db.skills.findAll()
            .then(skills => {
                res.render('cliente/info', {
                    user: user,
                    skills: skills
                });
            })
        })
    },
    actInfo: (req, res) => {
        let tipoForm = req.query.form;
        let contentForm = req.body;
        let idUser = req.session.user.user_id;
        console.log(idUser);
        let urlAncla = actUserCv.actualizarCv(tipoForm, contentForm, idUser);
        res.redirect('/perfil/informacion' + urlAncla);
    },
    mensajes: (req, res) => {
        res.render('cliente/mensajes', {title: 'Mensajes'});
    },
    configuracion: (req, res) => {
        db.clientes.findOne({
            where: {
                user_id: req.session.user.user_id
            }
        })
        .then(user => {
            res.render('cliente/config', {user});
        })
    },
    actConfig: (req, res) => {
        let tipoForm = req.query.form;
        let contentForm = req.body;
        let idUser = req.session.user.user_id;
        db.clientes.findOne({
            where: {
                user_id: req.session.user.user_id
            }
        })
        .then(result => {
            let urlAncla = actUserCv.actualizarConfig(
                tipoForm,
                contentForm,
                idUser,
                result.user_passwd,
                res
            );
            res.redirect('/perfil/configuracion/' + urlAncla);
        })
    },

    cambiarAvatar: (req,res) => 
    {
        let id = req.params.id;
       
        if(req.file)
        {
            req.body.avatar = req.file.filename;
            db.clientes.update({user_avatar : req.body.avatar},
                {
                    where:{user_id : id}
                })
                .then(()=>
                {
                    return res.redirect('/perfil');
                })
        }
        else
        {
            return res.redirect('/perfil');
        }
        
    }
};

module.exports = controller;