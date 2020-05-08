const bcrypt = require('bcrypt-nodejs');
const db = require('../database/models');

const auth = ((req,res,next) => {
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
                    if(bcrypt.compareSync(data[i].user_id.toString(),user_id)){
                        req.session.type_user = "cliente"; 
                        delete data[i].user_passwd;
                        req.session.user = data[i];
                        return next();
                    }
                }
            });
        }
        if(type_user == 'empresa'){
            db.empresas.findAll()
                .then( data => {
                    for(let i = 0; i<data.length;i++){
                    if(bcrypt.compareSync(data[i].id.toString(),user_id)){
                         req.session.type_user = "empresa"; 
                         delete data[i].cmp_user_passwd;
                         req.session.user = data[i];
                         console.log("se crea req.session.user " + data[i].id);    
                        return next();
                        }
                    }
                }
            )
        }
    } 
    else {
       return next();
    }
});

module.exports = auth;