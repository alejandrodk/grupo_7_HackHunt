// traer provincias para el select de busqueda
let select = document.querySelector('#user_city');
let select2 = document.querySelector('#user_work_location');

axios.get(' https://apis.datos.gob.ar/georef/api/provincias')

.then(response => {
    let data = response.data.provincias;
    let provincias = data.map(item => item.nombre).sort();
    
    for(let prov of provincias){
        select.innerHTML += `<option value="${prov}">${prov}</option>`
        select2.innerHTML += `<option value="${prov}">${prov}</option>`
    }
})