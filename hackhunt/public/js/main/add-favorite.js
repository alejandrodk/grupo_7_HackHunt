let adds = document.querySelectorAll('#add-favorite');
let anuncio = document.querySelector('.anuncio');
let anuncioId = anuncio.getAttribute('data-id');
let cliente = anuncio.getAttribute('data-user');

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

for (const item of adds) {
    item.addEventListener('click', function(){

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