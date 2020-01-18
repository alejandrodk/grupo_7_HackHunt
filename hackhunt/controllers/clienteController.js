const fs = require('fs');
const dbFunctions = require('../helpers/readjson.js');

const controller = {
    perfil: (req, res) => {
        let usuario;
        // validamos que exista una sesion
        if(req.session.user){
            //guardamos la info de la sesion para enviarla como objeto
            usuario = req.session.user
        };
        res.render('cliente/perfil', { usuario: usuario });
    },
    postulaciones: (req, res) => {
        res.render('cliente/postulaciones', { title: 'Postulaciones' });
    },
    favoritos: (req, res) => {
        if(req.query){
            //si existe el queryString refinar la busqueda por empresa
        }
        res.render('cliente/favoritos', { title: 'Favoritos' });
    },
    alertas : (req, res) => {
        if(req.query){
            //si existe el queryString refinar la busqueda por empresa
        }
        res.render('cliente/alertas' , { title: 'Alertas '});
    },
    info: (req, res) => {
        user = dbFunctions.modifyUser(req.session.user_id)
        res.render('cliente/info', { user: user });
    },
    actInfo: (req, res) => {
        // consultar DB y traer la info en los inputs
        // actualizar info en la DB
        info = req.body;
        const users = fs.readFileSync('data/usuarios.json',{encoding : 'utf-8'});
        let usuarios = JSON.parse(users);
        
        for (const usuario of usuarios) {
            if(usuario.nombre == req.session.user.nombre){
                info.dni ? usuario.dni = info.dni: usuario.dni = '';
                info.fechaNac ? usuario.fechaNac = info.fechaNac : usuario.fechaNac = '';
            }
        };

        // falta poder actualizar los datos en la DB
        res.redirect('/perfil/informacion');
    },
    mensajes: (req, res) => {
        res.render('cliente/mensajes', { title: 'Mensajes' });
    },
     configuracion: (req, res) => {
        res.render('cliente/config', { title: 'Config' });
    },
    actConfig: (req, res) => {
        // consultar DB y traer la info en los inputs que apliquen
        // actualizar informacion en la DB
        res.redirect('/perfil/configuracion');
    },

};

module.exports = controller;