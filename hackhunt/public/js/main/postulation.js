let add = document.querySelector('#postulation');

// id cliente
let userId = add.getAttribute('data-user');
// id anuncio
let advId = add.getAttribute('data-id');

// agrega el estado activo
function setState(item){
    item.classList.add('active');
    item.innerHTML = 'Cancelar Postulacion'
};
// elimina el estado activo
function removeState(item){
    item.classList.remove('active');
    item.innerHTML = 'Postularme';
};

// se crea una variable response que espera a que se resuelva el pedido por fetch
// y luego se le asigna su resultado.
// se crea una variable data que espera a que "response" se haya resuelto
// por ultimo se ejecuta la funcion checkPostulation
// **** la funcion esta entre parentesis (...) y con () al final para que se ejecute
// sin tener que invocarla (...)()

(async function fetchpostulation(){
    let response = await fetch(`/api/anuncios/postulaciones/${userId}/${advId}`);
    let data = await response.json();
    checkPostulation(add, data.response)
})();

function checkPostulation(adv,data){
    
    let anuncioId = adv.getAttribute('data-id')

    if(anuncioId == data.adv_id){

        setState(add);
    }
}

add.addEventListener('click', function(){

    let anuncioId = add.getAttribute('data-id');
    let cliente = add.getAttribute('data-user');

    // si no esta iniciada la sesion, redirecciona al login
    if(cliente == ''){  
        window.location.href = "/login"
        return
    };

    if(!add.classList.contains('active')){

        setState(add);

        let url = '/api/anuncios/postulaciones'
        let data = {
            id : 0,
            adv_id : anuncioId,
            cli_id : cliente,
            visto : null
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
        removeState(add);

        let url = '/api/anuncios/postulaciones'
        let data = {
            adv_id : anuncioId,
            cli_id : cliente,
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

  
