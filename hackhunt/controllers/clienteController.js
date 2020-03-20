const db = require('../database/models');
const sequelize = db.sequelize;
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
        db.clientes.findOne({ where: { user_id: req.session.user.user_id },
            include: ['cliente_cv',{model:db.anuncios, as:"candidato", include:[{model:db.empresas, as:"empresas",attributes:['cmp_avatar','cmp_name']},{model:db.skills, as:"adv_skills"}]},{model:db.skills,as:"skill"}] })
            .then(user => {
                sequelize.query(`SELECT * FROM postulantes JOIN anuncios ON postulantes.adv_id = anuncios.id JOIN empresas ON anuncios.cmp_id = empresas.id HAVING cli_id = ${user.user_id}`)
                .then(result => {
                   // return res.send(user.skill)
                    res.render('cliente/postulaciones',{
                        anuncios : result[0],
                        usuario:user
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

        db.clientes.findOne({
            where:{user_id:req.session.user.user_id},
            include:[{model:db.skills,as:'skill'},
                     {model:db.anuncios,as:"favoritos",include:[{model:db.empresas,as:"empresas",attributes:['cmp_name','cmp_avatar']},
                                                                {model:db.skills,as:"adv_skills"}]
                        }]})
        .then( user => { 
           //return res.send(user)
            res.render('cliente/favoritos', {
                user
            });
        })
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
        let tipoForm = req.query.form;
        let contentForm = req.body;
        let idUser = req.session.user.user_id;
        console.log(idUser);
        let urlAncla = actUserCv.actualizarCv(tipoForm,contentForm,idUser);
        res.redirect('/perfil/informacion' + urlAncla);
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