const db = require('../../database/models');
const Sequelize = require('sequelize');
const empresa = db.empresas;
const Op = Sequelize.Op;

module.exports = 
{   empresas : (req, res) => {

        db.empresas.findAll()
        .then(response => {
            if(response){
            return res.json({
                    status_code : res.statusCode,
                    collection : 'empresas',
                    total_items : response.length,
                    response
                });
            }
            return res.status(404).json({
                status : res.statusCode
            })
        }).catch(error => console.log(error))
    },
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
    },

    check: (req,res) =>
    {
        let email = req.query.email;
        
        empresa.findAll({
            where:{cmp_user_email:email},
            attributes:['cmp_user_email']
        })
        .then(response =>
            {
                if(response)
                {
                    return res.json({
                        status_code:res.statusCode,
                        response:response
                    })
                }
                else
                {
                    return res.status(404).json(
                        {
                            status_code:res.statusCode
                        }
                    )
                }
            })
            .catch(error => res.json(error))
    },

    masPostulada: (req,res) =>
    {
        db.sequelize.query(`
        SELECT 
        empresas.cmp_name as "empresa",
        count(anuncios.id) as "cant_anuncios", 
        count(postulantes.cli_id) as "cant_postulantes" 
        FROM anuncios
        left join postulantes on anuncios.id = postulantes.adv_id
        inner join empresas on empresas.id = anuncios.cmp_id
        group by empresas.cmp_name
        order by count(postulantes.cli_id) desc
        limit 5`,{type: Sequelize.QueryTypes.SELECT})
        .then(resultado =>
            {
                if(resultado){
                return res.json(
                    {
                        status_code:res.statusCode,
                        rows: resultado.length,
                        response: resultado,
                    }
                )
                }
                else
                {
                    return res.status(404).json(
                        {
                            status_code:res.statusCode,
                            response:"no data"
                        }
                    )   
                }
            })
    }
}

