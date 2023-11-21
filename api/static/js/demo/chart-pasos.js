var nombres = document.getElementById('chart-pasos').getAttribute('data-pasos').split(',').filter(Boolean);
var conteos = document.getElementById('chart-pasos').getAttribute('data-conteo').split(',').filter(Boolean);

// Asegúrate de que los conteos sean números
conteos = conteos.map(Number);

var ctx = document.getElementById("chart-pasos");
var myBarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: nombres,
        datasets: [{
            label: "Preferencia de pasos para comprar",
            backgroundColor: "rgba(34, 236, 48 , 0.5)",
            borderColor: "rgba(0,0,0, 1)",
            borderWidth: 2,
            data: conteos,
        }],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});