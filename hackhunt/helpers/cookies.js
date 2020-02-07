const bcrypt = require('bcrypt');
const db = require('../database/models');


cookieUser = 
{
    findAll: type => {
        if(type == "company")
        {
            db.empresas.findAll({
                attributes:['id']
            })
            .then(result => {
                return result[0];
            })
        }
        if(type == "cliente")
        {
            db.clientes.findAll({
                attributes: ['id']
            })
            .then(result => {
                return result [0];
            })
        }
    }
    ,
    userExists: (id_array,user_id,type_user) => {
        for(let i = 0; i<id_array.length;i++)
        {
            if(bcrypt.compareSync(id_array[i],user_id))
            {
                return cookieUser.userData(user_id,type_user);
            }
    }
},
    userData: (id, type_user) => {
        if(type_user == "company")
        {
            db.empresas.findByPk(id,{
                attributes:['id','cmp_user_name','cmp_name','cmp_avatar']
            })
            .then(result => {
                return result[0];
            });
        }
        if(type_user == "cliente")
        {
            db.clientes.findByPk(id,{
                attributes: ['user_id','user_name','user_email','user_avatar']
            })
            .then(result => {
                return result[0];
            })
        }
    }

    
}

module.exports = cookieUser;

