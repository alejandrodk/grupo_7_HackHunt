
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
                for(let i = 0; i<data.length;i++){
          
                    if(bcrypt.compareSync(toString(data[i].user_id),user_id)){
                        req.session.type_user = "cliente"; 
                        delete data[i].user_passwd;
                        req.session.user = data[i];
                         return next();
                    }
                }
                });
            };
         
    } else {
        console.log('cookie id no encontrada');
        console.log('tipo de usuario no encontrado');
          
       return next();
    }
}