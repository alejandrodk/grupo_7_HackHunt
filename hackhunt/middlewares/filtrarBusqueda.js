const mainHelps = require('../helpers/mainHelpers');

module.exports = (req, res, next) => {

    if(req.session.busquedas == undefined || req.session.busquedas.filtros.length == 0){
        req.session.busqueda_activa = []
        req.session.busquedas = {
            filtros : []
        }
        return next();
    }
    if(req.query.deleteFilter){
       
        let filter = req.query.deleteFilter;
        console.log("valor actual de busquedas: "+ req.session.busquedas.filtros)
        mainHelps.deleteFilter(req,filter);

        res.redirect('/');
    }

    return next();
}