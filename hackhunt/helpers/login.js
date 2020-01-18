const fs = require('fs');
const bcrypt = require('bcrypt');

var loginFunctions = 
{
    companyLogin: (req,user,reqPasswd) =>
    {
        let login = false;
        if(user != '')
		{	
		login = bcrypt.compareSync(reqPasswd,user.cmp_passwd);
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
}

module.exports = loginFunctions;