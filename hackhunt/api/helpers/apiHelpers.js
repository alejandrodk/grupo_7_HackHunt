module.exports = {
    pagination : (req) => {

        let page = req.query.page != undefined ? req.query.page : 0;
        let maxResults = 4;
        let offset = page != 0 ? maxResults * parseInt(page) : 0 ;
        let limit = maxResults;

        return  {
            offset,
            limit
        }
    }
}