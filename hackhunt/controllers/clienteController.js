const controller = {
    perfil: (req, res) => {
        res.render('cliente/perfil', { title: 'Perfil' });
    },
    postulaciones: (req, res) => {
        res.render('cliente/postulaciones', { title: 'Postulaciones' });
    },
    favoritos: (req, res) => {
        res.render('cliente/favoritos', { title: 'Favoritos' });
    },
    alertas : (req, res) => {
        res.render('cliente/alertas' , { title: 'Alertas '});
    },
    info: (req, res) => {
        res.render('cliente/info', { title: 'CV' });
    },
    mensajes: (req, res) => {
        res.render('cliente/mensajes', { title: 'Mensajes' });
    },
     configuracion: (req, res) => {
        res.render('cliente/config', { title: 'Config' });
    },

};

module.exports = controller;