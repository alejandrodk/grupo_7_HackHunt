module.exports = {
    getDate : () => {
        let date = new Date();
        let dd = date.getDate();
        let mm = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        let yyyy = date.getFullYear();

        let fecha = `${yyyy}-${mm}-${dd}`;

        return fecha;
    }
}