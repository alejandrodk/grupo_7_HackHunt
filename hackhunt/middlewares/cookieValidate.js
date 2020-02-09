
const cookie_helper = require('../helpers/cookies');
const bcrypt = require('bcrypt');
const db = require('../database/models');

module.exports = (req,res,next) => {
    console.log('----------------Cookie validate--------------')
 
    if(req.cookies.user_id != undefined && req.cookies.type_user != undefined){
        console.log('cookie id encontrada: ' + req.cookies.user_id);
        console.log('tipo de usuario: ' + req.cookies.type_user);
        let type_user = req.cookies.type_user;
        let user_id = req.cookies.user_id;
        
        if(type_user == 'cliente'){
            db.clientes.findAll()
            .then( data => {
                data.forEach(usuario => {
                    usuario = usuario.get({ plain:true })
                    if(bcrypt.compareSync(toString(usuario.user_id),user_id)){
                        req.session.type_user = "cliente"; 
                        delete usuario.user_passwd;
                        req.session.user = usuario;
                        return next()
                    }
                });
            })
        } 
    } else {
        console.log('cookie id no encontrada');
        console.log('tipo de usuario no encontrado');
          
        return next();
    }
}