const bcrypt = require('bcrypt');
const db = require('../database/models');


cookieUser = 
{
    findAll: type => {
         if(bcrypt.compareSync("company",type))
        {
            let data = db.empresas.findAll({
                attributes:['id']
            })   
            return data;
        }
        if(bcrypt.compareSync("cliente",type))
        {
            let data = db.clientes.findAll({
                attributes: ['id']
            })
          return data;
        }
    }
    ,
    userExists: (id_array,user_id,type_user) => {
        for(let i = 0; i<id_array.length;i++)
        {
            let a = toString(id_array[i].id);
            if(bcrypt.compareSync(a,user_id))
            {
                return cookieUser.userData(id_array[i].id,type_user);
            }
    }
},
    userData: (id, type_user) => {
        if(bcrypt.compareSync("company",type_user))
        {
            let  user_info = db.empresas.findByPk(id,{
                attributes:['id','cmp_user_name','cmp_name','cmp_avatar']
            })
                return user_info;
            
        }
        if(bcrypt.compareSync("cliente",type_user))
        {
            let user_info = db.clientes.findByPk(id,{
                attributes: ['user_id','user_name','user_email','user_avatar']
            })
            return user_info;
        }
    }




    
}
module.exports = cookieUser;

