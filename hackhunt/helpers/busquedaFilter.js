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
    let array_or = [];
    let orderBy = "";
    //console.log("los datos del session busqueda: "+req.session.busquedas.filtros);

    if(req.query.search){  
        let { search } = req.query;
        // guardamos el filtro actual en las busquedas en la session
        mainHelps.addFilter(req, search);
        // buscamos coincidencias en todos los campos del anuncio
            let {filtros} = req.session.busquedas; 

            filtros.forEach(oneFiltro => {
                array_or.push(
                    {[Op.or]:[
                    {adv_title: {[Op.like]: '%'+ oneFiltro.trim() +'%' }},
                    {adv_description: {[Op.like]: '%'+ oneFiltro.trim() +'%' }},
                    {adv_area: {[Op.like]: '%'+ oneFiltro.trim() +'%' }},
                    {adv_position: {[Op.like]: '%'+ oneFiltro.trim() +'%' }},
                    {adv_working_day: {[Op.like]: '%'+ oneFiltro.trim() +'%' }},
                    {adv_advantage: {[Op.like]: '%'+ oneFiltro.trim() +'%' }},
                    {adv_location: {[Op.like]: '%'+ oneFiltro.trim() +'%' }}
                    ]})
                }
            )  
    }
    if(!req.query.search && req.session.busquedas.filtros.length>0){
        //console.log("entre en el if de no tener search")
        req.session.busquedas.filtros.forEach(oneFiltro => {
            array_or.push(
                {[Op.or]:[
                {adv_title: {[Op.like]: '%'+ oneFiltro.trim() +'%' }},
                {adv_description: {[Op.like]: '%'+ oneFiltro.trim() +'%' }},
                {adv_area: {[Op.like]: '%'+ oneFiltro.trim() +'%' }},
                {adv_position: {[Op.like]: '%'+ oneFiltro.trim() +'%' }},
                {adv_working_day: {[Op.like]: '%'+ oneFiltro.trim() +'%' }},
                {adv_advantage: {[Op.like]: '%'+ oneFiltro.trim() +'%' }},
                {adv_location: {[Op.like]: '%'+ oneFiltro.trim() +'%' }}
                ]})
            }
        )
    }

    if(req.query.ubication)
        {
            let { ubication } = req.query;
          
                array_or.push({[Op.or]:{adv_location: {[Op.like]: '%'+ ubication.trim() +'%' }}})  
        }
    //esto es para agregar filtro de anuncios activos
    if(req.query.order && req.query.order == "salary")
    {
        orderBy = [['adv_salary','DESC']] 
    }
    if(req.query.order && req.query.order == "date")
    {
        orderBy = [['adv_date_contract','DESC']];
    }
    
    if(params.jornada){
       array_or.push( {
            [Op.or] : [
                {adv_working_day : {[Op.like]: '%'+ params.jornada.replace('_','%') +'%' }},
                {adv_title : {[Op.like]: '%'+ params.jornada.replace('_','%') +'%' }},
                {adv_description : {[Op.like]: '%'+ params.jornada.replace('_','%') +'%' }}
            ]
        })
    }
    if(params.skill){
        array_or.push( {
            [Op.or] : [
                {adv_title : {[Op.like]: '%'+ params.skill +'%' }},
                {adv_description : {[Op.like]: '%'+ params.skill +'%' }}
            ]
        })
    }
    if(params.experiencia){
        if(params.experiencia == 'junior'){
            array_or.push( {
                [Op.or] : [
                    {adv_title : {[Op.like]: '%'+ params.experiencia +'%' }},
                    {adv_title : {[Op.like]: '%jr%' }},
                    {adv_description : {[Op.like]: '%'+ params.experiencia +'%' }},
                    {adv_description : {[Op.like]: '%jr%' }},
                ]
            })
        }
        if(params.experiencia == 'semi-senior'){
           array_or.push( {
                [Op.or] : [
                    {adv_title : {[Op.like]: '%'+ params.experiencia +'%' }},
                    {adv_title : {[Op.like]: '%semi%' }},
                    {adv_title : {[Op.like]: '%ssr%' }},
                    {adv_description : {[Op.like]: '%'+ params.experiencia +'%' }},
                    {adv_description : {[Op.like]: '%semi%' }},
                    {adv_description : {[Op.like]: '%ssr%' }},
                ]
            })
        }
        if(params.experiencia == 'senior'){
            array_or.push( {
                [Op.or] : [
                    {adv_title : {[Op.like]: '%'+ params.experiencia +'%' }},
                    {adv_title : {[Op.like]: '%sr%' }},
                    {adv_description : {[Op.like]: '%'+ params.experiencia +'%' }},
                    {adv_description : {[Op.like]: '%sr%' }},
                ]
            })
        }
    }

    where = {
        [Op.and]:array_or      
    }
    // retornar la consulta
    return db.anuncios.findAll({
        
        where : where,
		offset : pagination.offset,  
        limit : pagination.limit,
        order: orderBy,
		include:[{
            model: db.empresas, 
            as: 'empresas',
            attributes: ['cmp_name','cmp_avatar'],
            include: [{model:db.clientes,as:"cliente_favorito",
                       attributes:['user_id']}]
           },
           {model:db.skills, as:'adv_skills'} ]
	})

}