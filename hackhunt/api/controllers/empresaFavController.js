const db = require('../../database/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = 
{
    favoritos: (req,res) =>
    {
        db.cmpFavoritos.findAll()
        .then(resultado => {
         return  res.json({
                status_code: res.status_code,
                collection: "favoritos",
                total_items: resultado.length,
                response: resultado
            })
        })
    },

    addFavorite: (req,res) =>
    {
      
        db.cmpFavoritos.create({cmp_id:req.body.cmp_id,user_id:req.body.user_id})
        .then(response => {
            if(response)  
            {
              return  res.json(response);
            }
            else
            {
               return res.status(404).json({
                    status_code:res.status_code
                })
            }
        })
    },
 
    removeFavorite: (req,res) =>
    {
        let cmpid = req.body.cmp_id;
        let userid = req.body.user_id;
        db.cmpFavoritos.destroy({where:
            {[Op.and]:[{cmp_id:cmpid},{user_id:userid}]}
        })
        .then(response => {
            if(response)
            {
                return res.json({response})
            }
            else{
                return res.status(404).json({
                    status_code:res.status_code
                })
                .catch(error => console.log(error))
            }
        })
    }
}

