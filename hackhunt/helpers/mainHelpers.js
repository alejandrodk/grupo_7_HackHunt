module.exports = {
    pagination : (actualPage) => {
        let maxResults = 10;
        let offset = actualPage != 0 ? maxResults * parseInt(actualPage) : 0 ;
        console.log('resultados desde el #: ' + offset)
        let limit = maxResults;
        console.log('hasta el #: ' + (offset + limit))

        return {
            offset : offset,
            limit : limit,
        }
    }
}