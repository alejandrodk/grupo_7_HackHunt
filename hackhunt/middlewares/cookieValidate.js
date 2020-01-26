const dbFunctions = require('../helpers/readjson.js');
const bcrypt = require('bcrypt');
module.exports = (req,res,next) => {
    let users = dbFunctions.getAllUsers();
    //let user = users.file.find(item => item.user_id == req.cookies.user_id);
    // comprobar si existe un id de usuario guardado en la cookie
    if(req.cookies.user_id != undefined){
        // Validar id de usuario hasheado     
        let user = users.file.find(item => bcrypt.compareSync(item.user_id,req.cookies.user_id));
        // crear sesion
        req.session.data = user;
        req.session.user_email = user.user_email;
        // importar tipo de usuario de la DB
        req.session.type_user = user.type;
        res.locals.type_user = user.type;
        // devolver info por consola
        console.log('conectado como ' + user.user_name);
        console.log('tipo de usuario: ' + user.type);  
    }
    
    next();
}