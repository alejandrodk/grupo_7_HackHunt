window.onload = function () {

    let buttonAnterior = document.querySelector('.buttonAnterior');

    let urlQuery = new this.URLSearchParams(location.search);
    if (urlQuery.has('page')) {
        if (urlQuery.get('page') == 0) {
            buttonAnterior.style.display = 'none';
        }
    } else {
        buttonAnterior.style.display = 'none';
    }

    // Mobile menu toggle
    let menuMobile = document.querySelector('.secciones.mobile');
    let icon = document.querySelector('.menu-mobile-icon');

    icon.addEventListener('click', function () {
        if (menuMobile.classList.contains('activeMenu')) {
            menuMobile
                .classList
                .remove('activeMenu')
        } else {
            menuMobile
                .classList
                .add('activeMenu');
        }
    })
}