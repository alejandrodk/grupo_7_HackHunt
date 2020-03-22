window.onload = function () {

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