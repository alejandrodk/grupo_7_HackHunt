module.exports = {
    pagination : (req) => {
        let page = req.query.page != undefined ? req.query.page : 0;
        let maxResults = 10;
        let offset = page != 0 ? maxResults * parseInt(page) : 0 ;
        console.log('resultados desde el #: ' + offset)
        let limit = maxResults;
        console.log('hasta el #: ' + (offset + limit))

        return {
            offset : offset,
            limit : limit,
        }
    },
    addFilter : (req, filtro) => {

        let busquedas = req.session.busquedas.filtros;

        if(busquedas.indexOf(filtro) == -1){
            busquedas.push(filtro);
        }
        
    },
    deleteFilter : (req, filtro) => {

        let busquedas = req.session.busquedas.filtros;

        if(busquedas.indexOf(filtro) != -1){

            busquedas.splice(busquedas.indexOf(filtro), 1);
               
                    
        } 

    },
    setUrlFilters : (req, res) => {
        
    }
}