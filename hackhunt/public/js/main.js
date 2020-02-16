window.onload = function(){

let buttonSiguiente = document.querySelector('.buttonSiguiente');
let buttonAnterior = document.querySelector('.buttonAnterior');

let urlQuery = new this.URLSearchParams(location.search);
if(urlQuery.has('page')){
    if(urlQuery.get('page') == 0){
        buttonAnterior.style.display = 'none';
    }
} else {
    buttonAnterior.style.display = 'none';
}



}