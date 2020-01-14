const fs = require('fs');

const controller = {
    perfil: (req, res) => {
        let usuario;
        // validamos que exista una sesion
        if(req.session.usuario){
            //guardamos la info de la sesion para enviarla como objeto
            usuario = req.session.usuario
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
        res.render('cliente/info', { title: 'CV' });
    },
    actInfo: (req, res) => {
        // consultar DB y traer la info en los inputs
        // actualizar info en la DB
        info = req.body;
        const users = fs.readFileSync('data/usuarios.json',{encoding : 'utf-8'});
        let usuarios = JSON.parse(users);
        
        for (const usuario of usuarios) {
            if(usuario.nombre == req.session.usuario.nombre){
                info.dni ? usuario.dni = info.dni: usuario.dni = '';
                info.fechaNac ? usuario.fechaNac = info.fechaNac : usuario.fechaNac = '';
                /* usuario.genero = info.genero;
                usuario.edoCivil = info.edoCivil;
                usuario.telefono = info.telefono;
                usuario.ciudad = info.ciudad;
                usuario.cargo = info.cargo;
                usuario.nivel = info.nivel;
                usuario.desc = info.desc;
                usuario.expempresa = info.expempresa;
                usuario.expcargo = info.expcargo;
                usuario.expdesde = info.expdesde;
                usuario.exphasta = info.exphasta;
                usuario.expdesc = info.expdesc; */
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