const mainHelps = require('../helpers/mainHelpers');

module.exports = (req, res, next) => {

    if(req.session.busquedas == undefined){

        req.session.busquedas = {
            filtros : []
        }
        return next();
    }
    if(req.query.deleteFilter){

        let filter = req.query.deleteFilter;

        mainHelps.deleteFilter(req,filter);

        res.redirect('/');
    }

    return next();
}