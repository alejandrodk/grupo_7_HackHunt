const fs = require('fs');
const bcrypt = require('bcrypt');

var loginFunctions = 
{
    companyLogin: (req,user,reqPasswd) =>
    {
        let login = false;
        if(user != '')
		{	
		login = bcrypt.compareSync(reqPasswd,user.cmp_user_passwd);
		}
		
		if(login)
		{
			req.session.user_name = user.cmp_user_name;
            req.session.user_id = user.cmp_user_id;
            req.session.avatar = user.cmp_user_avatar;
			return true;
        }
        else{return false}
    },
    userLogin: (req,user,reqPasswd) =>
    {
        let login = false;
        if(user != '')
		{	
		login = bcrypt.compareSync(reqPasswd,user.user_passwd);
		}
		
		if(login)
		{
			req.session.user_name = user.user_name;
            req.session.user_id = user.user_id;
            req.session.avatar = user.user_avatar;
			return true;
        }
        else{return false}
    },
    
}

module.exports = loginFunctions;