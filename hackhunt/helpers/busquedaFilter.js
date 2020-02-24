const Sequelize = require("Sequelize")
const Op = Sequelize.Op;
const db = require('../database/models');
const mainHelps = require('./mainHelpers');

module.exports = (req) => {
    // consulta si existe la query de paginacion y devuelve offset y limit.
    let pagination = mainHelps.pagination(req);
    // segun los querystring recibidos, agregamos condiciones al where
    let where = {}

    if(req.query.search){

        let { search, ubication } = req.query;
        // guardamos el filtro actual en las busquedas en la session
        mainHelps.addFilter(req, search);
        // buscamos coincidencias en todos los campos del anuncio
        where = {
            [Op.or]: [
            {adv_title: {[Op.like]: '%'+ search.trim() +'%' }},
            {adv_description: {[Op.like]: '%'+ search.trim() +'%' }},
            {adv_area: {[Op.like]: '%'+ search.trim() +'%' }},
            {adv_position: {[Op.like]: '%'+ search.trim() +'%' }},
            {adv_working_day: {[Op.like]: '%'+ search.trim() +'%' }},
            {adv_advantage: {[Op.like]: '%'+ search.trim() +'%' }},
            {skills: {[Op.like]: '%'+ search.trim() +'%' }},
            {adv_location: {[Op.like]: '%'+ ubication +'%' }},
            ]
        }
    }
    // retornar la consulta
    return db.anuncios.findAll({
                where : where,
		    	offset : pagination.offset,
		    	limit : pagination.limit,
		    	include:[{
                    model: db.empresas, 
                    as: 'empresas',
                    attributes: ['cmp_name','cmp_avatar']
                   }]
		    })

}