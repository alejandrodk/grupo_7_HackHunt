const db = require('../../database/models');
const Sequelize = require("sequelize")
const Op = Sequelize.Op;

module.exports = {
    favoritos : (req, res) => {
        db.userFavoritos.findAll()
        .then(result => {
            res.json({
                status_code : res.statusCode,
                collection : 'favoritos',
                total_items : result.length,
                response : result
            });
        })
    },
    addFavorite : (req, res) => {

        let adv = req.body.adv_id;
        let user = req.body.user_id;

        db.userFavoritos.create({
            id : null,
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
        
        let adv = req.body.adv_id;
        let user = req.body.user_id;

        db.userFavoritos.destroy({
            where : {
                [Op.and]: [{ adv_id: adv }, { user_id: user }]
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