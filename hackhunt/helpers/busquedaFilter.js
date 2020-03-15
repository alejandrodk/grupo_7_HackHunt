const Sequelize = require("sequelize")
const Op = Sequelize.Op;
const db = require('../database/models');
const mainHelps = require('./mainHelpers');

module.exports = (req) => {
    const params = req.params;
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
            [Op.and] : 
                [{adv_location:  ubication}, 
                    {[Op.or]: [
                        {adv_title: {[Op.like]: '%'+ search.trim() +'%' }},
                        {adv_description: {[Op.like]: '%'+ search.trim() +'%' }},
                        {adv_area: {[Op.like]: '%'+ search.trim() +'%' }},
                        {adv_position: {[Op.like]: '%'+ search.trim() +'%' }},
                        {adv_working_day: {[Op.like]: '%'+ search.trim() +'%' }},
                        {adv_advantage: {[Op.like]: '%'+ search.trim() +'%' }}
                    ]
                }]
        }
    }
    //esto es para agregar filtro de anuncios activos
    //{adv_date_contract:{[Op.gte]:Sequelize.fn('NOW')}}
    
    if(params.jornada /* && params.skill == undefined && params.experiencia == undefined */){
        where = {
            [Op.or] : [
                {adv_working_day : {[Op.like]: '%'+ params.jornada.replace('_','%') +'%' }},
                {adv_title : {[Op.like]: '%'+ params.jornada.replace('_','%') +'%' }},
                {adv_description : {[Op.like]: '%'+ params.jornada.replace('_','%') +'%' }}
            ]
        }
    }
    if(params.skill){
        where = {
            [Op.or] : [
                {adv_title : {[Op.like]: '%'+ params.skill +'%' }},
                {adv_description : {[Op.like]: '%'+ params.skill +'%' }}
            ]
        }
    }
    if(params.experiencia){
        if(params.experiencia == 'junior'){
            where = {
                [Op.or] : [
                    {adv_title : {[Op.like]: '%'+ params.experiencia +'%' }},
                    {adv_title : {[Op.like]: '%jr%' }},
                    {adv_description : {[Op.like]: '%'+ params.experiencia +'%' }},
                    {adv_description : {[Op.like]: '%jr%' }},
                ]
            }
        }
        if(params.experiencia == 'semi-senior'){
            where = {
                [Op.or] : [
                    {adv_title : {[Op.like]: '%'+ params.experiencia +'%' }},
                    {adv_title : {[Op.like]: '%semi%' }},
                    {adv_title : {[Op.like]: '%ssr%' }},
                    {adv_description : {[Op.like]: '%'+ params.experiencia +'%' }},
                    {adv_description : {[Op.like]: '%semi%' }},
                    {adv_description : {[Op.like]: '%ssr%' }},
                ]
            }
        }
        if(params.experiencia == 'senior'){
            where = {
                [Op.or] : [
                    {adv_title : {[Op.like]: '%'+ params.experiencia +'%' }},
                    {adv_title : {[Op.like]: '%sr%' }},
                    {adv_description : {[Op.like]: '%'+ params.experiencia +'%' }},
                    {adv_description : {[Op.like]: '%sr%' }},
                ]
            }
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
                   },
                   {model:db.skills, as:'adv_skills'} ]
		    })

}