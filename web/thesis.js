
var ctx = document.getElementById('chart1').getContext('2d');
var chart = new Chart(ctx, {

    type: 'radar',

    data: {

        labels: ['RBC', 'WBC', 'HGB', 'HT', 'MCV', 'MCH', 'MCHC','Platelets','RDW'],

        datasets: [{
            backgroundColor:'rgba(255, 178, 59, 0.7)',
            borderWidth: 0.5,
            borderColor: 'rgba(255 , 82,  29, 0)',
            pointBackgroundColor: 'rgba(255 , 82,  29, 0',
            pointBorderWidth: 0,
            pointHitRadius:0,
            pointHoverBackgroundColor	: '#FFB23B',
            hoverRadius: 0,
            data: [60,60,60,60,60,60,60,60,60],
            fontSize: 10,

        }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: false,
      scale: {
              ticks: {
                  display: false,
              },
               gridLines: {
                  circular: true,
                  color: '#232323',
                  lineWidth: 0.1
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
            backgroundColor:'rgba(166, 195, 186, 0.7)',
            borderWidth: 0,
            borderColor: 'rgba(41, 234, 255, 0)',
            pointBackgroundColor: 'rgba(41, 234, 255, 0)',
            pointBorderWidth: 0,
            pointHitRadius:0,
            pointHoverBackgroundColor	: '#A6C3BA',
            hoverRadius: 0,
            data: [40,40,40,40,40],
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
          },
          gridLines: {
              circular: true,
              color: '#232323',
              lineWidth: 0.1
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
            backgroundColor:'rgba(79, 118, 226, 0.7)',
            borderWidth: 0,
            borderColor: 'rgba(41, 234, 255, 0)',
            pointBackgroundColor: 'rgba(41, 234, 255, 0)',
            pointBorderWidth: 0,
            pointHitRadius:0,
            pointHoverBackgroundColor	: '#4F76E2',
            hoverRadius: 0,
            data: [70,70,70,70,70,70],
        }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: false,
      scale: {

          ticks: {
              display: false,
          },
          gridLines: {
              circular: true,
              color: '#232323',
              lineWidth: 0.1
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
            backgroundColor:'rgba(255, 118, 81, 0.7)',
            borderWidth: 0,
            borderColor: 'rgba(41, 234, 255, 0)',
            pointBackgroundColor: 'rgba(41, 234, 255, 0)',
            pointBorderWidth: 0,
            pointHitRadius:0,
            pointHoverBackgroundColor	: '#FF7651',
            hoverRadius: 0,
            data: [70,70,70,70,70,70,70,70,0,0],
            fontSize: 12,
          },{
            backgroundColor:'rgba(50, 74, 81, 0.7)',
            borderWidth: 0,
            borderColor: 'rgba(41, 234, 255, 0)',
            pointBackgroundColor: 'rgba(41, 234, 255, 0)',
            pointBorderWidth: 0,
            pointHitRadius:0,
            pointHoverBackgroundColor	: '#324A51',
            hoverRadius: 0,
            data: [0,0,0,0,0,0,0,0,70,70],
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
          },
          gridLines: {
              circular: true,
              color: '#232323',
              lineWidth: 0.1
          }
      }
    },
});
