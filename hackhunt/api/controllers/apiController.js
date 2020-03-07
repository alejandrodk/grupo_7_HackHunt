const db = require('../../database/models');

module.exports = {

    addFavorite : (req, res) => {
 
        let { user, adv } = req.body;

        db.favoritos.create({
            id : 1,
            user_id : user,
            adv_id : adv
        })
        .then( result => {
            if(result) {
                return res.json(result);
            }

            return res.status(404).json({
                status : res.statusCode
            });
            
        }) .catch(error => res.json(error))

    },
    removeFavorite : (req, res) => {
        let { adv, user } = req.body;

        db.favoritos.destroy({
            where : {
                user_id : user,
                adv_id : adv
            }
        })
        .then( result => {
            if(result){
                return res.json(result);
            }
            return res.status(404).json({
                status : res.statusCode
            })
        }) .catch(error => res.json(error))
    }
}