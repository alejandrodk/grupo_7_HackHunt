const fs = require('fs');
const bcrypt = require('bcrypt');

var loginFunctions = 
{
    checkLogin: (req,user) =>
    {
        
        var login = false;
        if(req.url == '/empresa/login')
        {
            if(user != '')
            {	
            login = bcrypt.compareSync(req.body.cmp_user_passwd,user.cmp_user_passwd);
            }
            
            if(login)
            {
                req.session.user_name = user.cmp_name;
                req.session.user_id = user.cmp_id;
                req.session.avatar = user.cmp_avatar;
                return true;
            }
            else{return false}
        }
        if(req.url == '/login')
        {
            if(user != '')
            {	
            login = bcrypt.compareSync(req.body.user_passwd,user.user_passwd);
            }
            
            if(login)
            {
                req.session.user_name = user.user_name;
                req.session.user_id = user.user_id;
                req.session.avatar = user.user_avatar;
                return true;
            }
            else{return false}
        }

    }
}

module.exports = loginFunctions;