let adds = document.querySelectorAll('#add-favorite');

// cambia el icono a solido y agrega el estado activo
function setState(item){
    item.classList.remove('far');
    item.classList.add('fas');
    item.classList.add('active');
};
// cambia el icono a bordeado y elimina el estado activo
function removeState(item){
    item.classList.remove('active');
    item.classList.remove('fas');
    item.classList.add('far');
};

// se crea una variable response que espera a que se resuelta el pedido por fetch
// y luego se le asigna su resultado.
// se crea una variable data que espera a que "response" se haya resuelto
// por ultimo se ejecuta la funcion checkFavorites
// **** la funcion esta entre parentesis (...)() y con () al final para que se ejecute
// sin tener que invocarla

(async function fetchFavorites(){
    let response = await fetch('/api/favoritos');
    let data = await response.json();
    checkFavorites(adds, data.response)
})();

function checkFavorites(advs,favoritos){
    // se recorren cada uno de los anuncios
    for (let item of advs) {
        // se toma el id de cada anuncio
        let anuncioId = item.getAttribute('data-id');
        // se recorren los anuncios favoritos traidos por fetch y se buscan coincidencias
        for (let anuncio of favoritos) {
            if(anuncio.adv_id == anuncioId){
                item.classList.remove('far');
                item.classList.add('fas');
                item.classList.add('active');
            }
        }    
    };
}

for (let item of adds) {
    item.addEventListener('click', function(){

        let anuncioId = item.getAttribute('data-id');
        let cliente = item.getAttribute('data-user');

        if(item.classList.contains('far')){
            setState(item);

            let url = '/api/favoritos'
            let data = {
                id : 0,
                user_id : cliente,
                adv_id : anuncioId,
            };
        
            fetch(url, {
                method : 'POST',
                body: JSON.stringify(data),
                headers : {
                    'content-type' : 'application/json'
                }
            })
            .then(result => result.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))

        } else {
            removeState(item);

            let url = '/api/favoritos'
            let data = {
                user_id : cliente,
                adv_id : anuncioId,
            };
        
            fetch(url, {
                method : 'DELETE',
                body: JSON.stringify(data),
                headers : {
                    'content-type' : 'application/json'
                }
            })
            .then(result => result.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
        }
    })
}