const db = require('../../database/models');

module.exports = {
    anuncios : (req, res) => {

    },
    favoritos : (req, res) => {

    },
    addFavorite : (req, res) => {

        let { adv, user } = req.body;

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

    }
}