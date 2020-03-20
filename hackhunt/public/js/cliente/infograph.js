let canvas = document.querySelector('#anunciosData');
let stats = document.querySelector('.estadisticas');

let vistos = stats.getAttribute('data-vistas');
let activas = stats.getAttribute('data-activas');

Chart.defaults.global.defaultFontFamily = "Roboto";
Chart.defaults.global.defaultFontSize = 15;

let anunciosData = {
    labels: [
        "Postulaciones Activas",
        "Vistas por la empresa",
    ],
    datasets: [
        {
            data: [activas,vistos],
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

