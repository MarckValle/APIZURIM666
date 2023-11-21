// var edades = document.getElementById('myPieChart').getAttribute('data-edades').split(',').filter(Boolean);
// var conteos = document.getElementById('myPieChart').getAttribute('data-conteo').split(',').filter(Boolean);

// // Asegúrate de que los datos sean números
// edades = edades.map(Number);
// conteos = conteos.map(Number);

// // Genera colores automáticamente para cada rango de edad
// var colores = Array.from({length: edades.length}, () => '#'+(Math.random()*0xFFFFFF<<0).toString(16));


// var ctx = document.getElementById("myPieChart");
// var myPieChart = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: conteos,
//         datasets: [{
//             label: 'Edades',
//             data: edades,
//             backgroundColor: colores,
//             hoverBackgroundColor: colores,
//             hoverBorderColor: "rgba(234, 236, 244, 1)",
//         }],
//     },
//     options: {
//         maintainAspectRatio: false,
//         tooltips: {
//             backgroundColor: "rgb(255,255,255)",
//             bodyFontColor: "#858796",
//             borderColor: '#dddfeb',
//             borderWidth: 1,
//             xPadding: 15,
//             yPadding: 15,
//             displayColors: false,
//             caretPadding: 10,
//         },
//         legend: {
//             display: false
//         },
//         cutoutPercentage: 50,
//     },
// });



//     var edades = document.getElementById('myPieChart').getAttribute('data-edades').split(',').filter(Boolean);
//     var conteos = document.getElementById('myPieChart').getAttribute('data-conteo').split(',').filter(Boolean);

//     // Asegúrate de que los datos sean números
//     edades = edades.map(Number);
//     conteos = conteos.map(Number);

//     var colores = generarColoresAleatorios(edades.length);

//     var ctx = document.getElementById("myPieChart");
//     var myPieChart = new Chart(ctx, {
//         type: 'pie',
//         data: {
//             labels: edades,
//             datasets: [{
//                 data: conteos,
//                 backgroundColor: colores,
//                 hoverBackgroundColor: colores,
//                 hoverBorderColor: "rgba(234, 236, 244, 1)",
//             }],
//         },
//         options: {
//             maintainAspectRatio: false,
//             tooltips: {
//                 backgroundColor: "rgb(255,255,255)",
//                 bodyFontColor: "#858796",
//                 borderColor: '#dddfeb',
//                 borderWidth: 1,
//                 xPadding: 15,
//                 yPadding: 15,
//                 displayColors: false,
//                 caretPadding: 10,
//             },
//             legend: {
//                 display: false
//             },
//             cutoutPercentage: 50,
//         },
//     });


// function generarColoresAleatorios(cantidad) {
//     var colores = [];
//     for (var i = 0; i < cantidad; i++) {
//         colores.push('#' + (Math.random() * 0xFFFFFF << 0).toString(16));
//     }
//     return colores;
// }


    var ctx = document.getElementById("myPieChart");
    var edades = document.getElementById('myPieChart').getAttribute('data-edades').split(',').filter(Boolean);
    var conteos = document.getElementById('myPieChart').getAttribute('data-conteo').split(',').filter(Boolean);

    // Asegúrate de que los datos sean números
    edades = edades.map(Number);
    conteos = conteos.map(Number);
    // Datos de ejemplo
  

    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: edades,
            datasets: [{
                label:'edades',
                data: conteos,
                backgroundColor: generarColoresAleatorios(edades.length),
                hoverBackgroundColor: generarColoresAleatorios(edades.length),
                hoverBorderColor: "rgba(234, 236, 244, 1)",
            }],
        },
        options: {
            maintainAspectRatio: false,
            tooltips: {
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                borderColor: '#dddfeb',
                borderWidth: 1,
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
                caretPadding: 10,
            },
            legend: {
                display: false
            },
            cutoutPercentage: 50,
        },
    });


function generarColoresAleatorios(cantidad) {
    var colores = [];
    for (var i = 0; i < cantidad; i++) {
        colores.push('#' + (Math.random() * 0xFFFFFF << 0).toString(16));
    }
    return colores;
}
