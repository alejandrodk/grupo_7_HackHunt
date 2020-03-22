let canvas = document.querySelector('#anunciosData');
let stats = document.querySelector('.estadisticas');

let finalizados = stats.getAttribute('data-finalizados');
let activos = stats.getAttribute('data-activos');

Chart.defaults.global.defaultFontFamily = "Roboto";
Chart.defaults.global.defaultFontSize = 15;

let anunciosData = {
    labels: [
        "Anuncios Activos",
        "Anuncios Finalizados",
    ],
    datasets: [
        {
            data: [activos,finalizados],
            backgroundColor: [
                "#a8e004",
                "#f83e82",
            ]
        }]
};

let pieChart = new Chart(canvas, {
  type: 'doughnut',
  data: anunciosData
});

