var ctx = document.getElementById('chart1').getContext('2d');
var chart = new Chart(ctx, {

    type: 'radar',


    data: {

        labels: ['RBC', 'WBC', 'HGB', 'HT', 'MCV', 'MCH', 'MCHC','Platelets','RDW'],

        datasets: [{
            backgroundColor:'rgba(255, 178, 59, 0)',
            borderWidth: 0.5,
            borderColor: '#232323',
            pointBackgroundColor: 'rgba(255, 178, 59, 1)',
            pointBorderWidth: 1,
            pointHitRadius:0,
            pointHoverBackgroundColor	: '#FFB23B',
            hoverRadius: 0,
            data: [52,55,42,58,61,45,54,58,64],
            fontSize: 10,

        }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: false,
      scale: {
              ticks: {
                  beginAtZero: true,

                  display: false,
              },
               gridLines: {
                  circular: true,
                  color: '#232323',
                  lineWidth: 0.2
              }
      }
    },

});

var ctx = document.getElementById('chart2').getContext('2d');
var chart = new Chart(ctx, {

    type: 'radar',

    data: {

        labels: ['Neutrophils', 'Lymphocytes', 'Monocytes', 'Eosinophils', 'Basophils'],
        datasets: [{
            // label: '#',
            backgroundColor:'rgba(166, 195, 186, 0)',
            borderWidth: 0.5,
            borderColor: '#232323',
            pointBackgroundColor: 'rgba(166, 195, 186, 1)',
            pointBorderWidth: 1,
            pointHitRadius:0,
            pointHoverBackgroundColor	: '#A6C3BA',
            hoverRadius: 0,
            data: [22,16,16,23,26],
            fontSize: 12,

        }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: false,
      scale: {

          ticks: {
              display: false,
              beginAtZero:true,
          },
          gridLines: {
              circular: true,
              color: '#232323',
              lineWidth: 0.2
          }
      }
    },
});

var ctx = document.getElementById('chart3').getContext('2d');
var chart = new Chart(ctx, {

    type: 'radar',

    data: {

        labels: ['Glu', 'Ca', 'Na+', 'K+','HCO3','Cl'],
        fontSize: 8,
        datasets: [{
            // label: '#',
            backgroundColor:'rgba(79, 118, 226, 0)',
            borderWidth: 0.5,
            borderColor: '#232323',
            pointBackgroundColor: 'rgba(79, 118, 226, 1)',
            pointBorderWidth: 1,
            pointHitRadius:0,
            pointHoverBackgroundColor	: '#4F76E2',
            hoverRadius: 0,
            data: [30,33,37,44,33,46],
        }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: false,
      scale: {

          ticks: {
              display: false,

              beginAtZero: true,
          },
          gridLines: {
              circular: true,
              color: '#232323',
              lineWidth: 0.2
          }
      }
    },
});

var ctx = document.getElementById('chart4').getContext('2d');
var chart = new Chart(ctx, {

    type: 'radar',

    data: {

        labels: ['AST','ALT','Bilirubin','GGT','ALP','PT','PTT','Albumin','Cr','BUN'],
        datasets: [{
            backgroundColor:'rgba(255, 118, 81, 0)',
            borderWidth: 0.5,
            borderColor: '#232323',
            pointBackgroundColor: 'rgba(255, 118, 81,1)',
            pointBorderWidth: 1,
            pointHitRadius:0,
            pointHoverBackgroundColor	: '#FF7651',
            hoverRadius: 0,
            data: [45,55,67,60,45,40,40,60,50,50],
            fontSize: 12,
        }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: false,
      scale: {

          ticks: {
            beginAtZero:true,
            display: false,
          },
          gridLines: {
              circular: true,
              color: '#232323',
              lineWidth: 0.2
          }
      }
    },
});
