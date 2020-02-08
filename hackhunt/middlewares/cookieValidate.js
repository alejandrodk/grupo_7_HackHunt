
const cookie_helper = require('../helpers/cookies');
const bcrypt = require('bcrypt');
module.exports = (req,res,next) => {

 
    if(req.cookies.user_id != undefined && req.cookies.type_user != undefined){
        let type_user = req.cookies.type_user;
        let user_id = req.cookies.user_id;
        
         cookie_helper.findAll(type_user)
         .then(result => {
              cookie_helper.userExists(result,user_id,type_user)
             .then(user_data => {
                 
                req.session.data = user_data;
                if(bcrypt.compareSync("company",type_user)){
                    req.session.type_user = "company";
                }
                else
                {
                    req.session.type_user = "cliente";  
                }
                    return next(); 
                 })
            })
        }
         else
         {
         return next();
         }
    
    
}