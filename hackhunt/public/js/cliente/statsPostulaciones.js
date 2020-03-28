let canvas = document.querySelector('#anunciosData');

let leidos = document.querySelector('#leidos').innerHTML;
let noLeidos = document.querySelector('#noLeidos').innerHTML;
let totales = document.querySelector('#totales').innerHTML;

Chart.defaults.global.defaultFontFamily = "Roboto";
Chart.defaults.global.defaultFontSize = 15;

let anunciosData = {
    labels: [
        "Leidos",
        "No Leidos",
        "Total"
    ],
    datasets: [
        {
            data: [leidos,noLeidos,totales],
            backgroundColor: [
                "#a8e004",
                "#f83e82",
                "#0ec0ec",
            ]
        }]
};

let pieChart = new Chart(canvas, {
  type: 'doughnut',
  data: anunciosData
});

