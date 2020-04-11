const mainHelps = require('../helpers/mainHelpers');

module.exports = (req, res, next) => {

    if(req.session.busquedas == undefined || req.session.busquedas.filtros.length == 0){
        req.session.busqueda_activa = []
        req.session.busquedas = {
            filtros : []
        }
        console.log("se vació el filtros session")
        return next();
    }
    if(req.query.deleteFilter){
       
        let filter = req.query.deleteFilter;
        console.log("se ejecuta el borrado del filtro")
        mainHelps.deleteFilter(req,filter);
        console.log("se hace next despues del borrado del filtro")
        
        return res.redirect('/');
    }

    return next();
}