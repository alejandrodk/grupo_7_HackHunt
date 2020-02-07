
const cookie_helper = require('../helpers/cookies');
module.exports = (req,res,next) => {

 
    if(req.cookies.user_id != undefined){
        let type_user = req.cookies.user_type;
        let user_id = req.cookies.user_id;
        let id_array = cookie_helper.findAll(type_user);
        console.log(id_array);
        let user_data = cookie_helper.userExists(id_array,user_id,type_user);

        req.session.data = user_data;
        req.session.type_user = type_user;
    }
    
    next();
}