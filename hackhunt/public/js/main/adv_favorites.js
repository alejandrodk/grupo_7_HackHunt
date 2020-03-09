let adds = document.querySelectorAll('#add-favorite');

function setState(item){
    item.classList.remove('far');
    item.classList.add('fas');
    item.classList.add('active');
};

function removeState(item){
    item.classList.remove('active');
    item.classList.remove('fas');
    item.classList.add('far');
};

//let favorites = [{ adv_id : 82},{ adv_id : 88 }]

/* const dbFavoritos = {};

fetch('/api/favoritos')
    .then(response => response.json())
    .then(result => {
        dbFavoritos = result; 
    })
    .catch(error => console.log(error))

console.log(dbFavoritos);


function isFavorite(favoritos, idAnuncio){
    for (let adv of favoritos) {
        if(adv.adv_id == idAnuncio){
            return true
        }
    }   return false
};

for (let item of adds) {

    let anuncioId = item.getAttribute('data-id');

    for (let anuncio of dbFavoritos) {
        if(anuncio.adv_id == anuncioId){
            item.classList.remove('far');
            item.classList.add('fas');
            item.classList.add('active');
        }
    }    
}; */

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


async function prueba()
{
    let response = await fetch('/api/favoritos')
    let data = await response.json()
    return data;
    }

    prueba()
    .then(response => console.log(response))
  
