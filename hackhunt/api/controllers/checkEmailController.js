const db = require('../../database/models');
const empresa = db.empresas;

module.exports = 
{
    check: (req,res) =>
    {
        let email = req.query.email;
        console.log("el email es: "+email);
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

    }
}