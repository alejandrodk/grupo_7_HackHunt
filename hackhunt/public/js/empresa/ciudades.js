// traer provincias para el select de busqueda
let select = document.querySelector('#adv_location');

axios.get(' https://apis.datos.gob.ar/georef/api/provincias')
.then(response => {
    let data = response.data.provincias;
    let provincias = data.map(item => item.nombre).sort();
    
    for(let prov of provincias){
        select.innerHTML += `<option value="${prov}">${prov}</option>`
    }
})