const controller = {
    perfil: (req, res) => {
        res.render('cliente/perfil', { title: 'Perfil' });
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