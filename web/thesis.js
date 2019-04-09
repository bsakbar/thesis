
var ctx = document.getElementById('chart1').getContext('2d');
var chart = new Chart(ctx, {

    type: 'radar',

    data: {

        labels: ['RBC', 'WBC', 'HGB', 'HT', 'MCV', 'MCH', 'MCHC','Platelets','RDW'],

        datasets: [{
            backgroundColor:'rgba(77, 255, 178, 0.7)',
            borderWidth: 0.5,
            borderColor: 'rgba(255 , 82,  29, 0)',
            pointBackgroundColor: 'rgba(255 , 82,  29, 0',
            pointBorderWidth: 0,
            pointHitRadius:0,
            pointHoverBackgroundColor	: '#FF5F40',
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
            backgroundColor:'rgba(100, 77, 255, 0.7)',
            borderWidth: 0,
            borderColor: 'rgba(41, 234, 255, 0)',
            pointBackgroundColor: 'rgba(41, 234, 255, 0)',
            pointBorderWidth: 0,
            pointHitRadius:0,
            pointHoverBackgroundColor	: '#29eaff',
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
              color: 'rgba(100, 77, 255, 1)',
              lineWidth: 0.1
          }
      }
    },
});

var ctx = document.getElementById('chart3').getContext('2d');
var chart = new Chart(ctx, {

    type: 'radar',

    data: {

        labels: ['Blood Glucose', 'Calcium', 'Sodium', 'Potassium','Bicarbonate','Chloride'],
        datasets: [{
            // label: '#',
            backgroundColor:'rgba(255, 36, 69, 0.7)',
            borderWidth: 0,
            borderColor: 'rgba(41, 234, 255, 0)',
            pointBackgroundColor: 'rgba(41, 234, 255, 0)',
            pointBorderWidth: 0,
            pointHitRadius:0,
            pointHoverBackgroundColor	: '#29eaff',
            hoverRadius: 0,
            data: [70,70,70,70,70,70],
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
              color: 'rgba(100, 77, 255, 1)',
              lineWidth: 0.1
          }
      }
    },
});

var ctx = document.getElementById('chart4').getContext('2d');
var chart = new Chart(ctx, {

    type: 'radar',

    data: {

        labels: ['AST','ALT','Bilirubin','GGT','ALP','PT','PTT','Albumin','Creatinine','BUN'],
        datasets: [{
            backgroundColor:'rgba(255, 36, 69, 0.7)',
            borderWidth: 0,
            borderColor: 'rgba(41, 234, 255, 0)',
            pointBackgroundColor: 'rgba(41, 234, 255, 0)',
            pointBorderWidth: 0,
            pointHitRadius:0,
            pointHoverBackgroundColor	: '#29eaff',
            hoverRadius: 0,
            data: [70,30,79,34,70,60,90,44,0,0],
            fontSize: 12,
          },{
            backgroundColor:'rgba(77, 255, 178, 0.7)',
            borderWidth: 0,
            borderColor: 'rgba(41, 234, 255, 0)',
            pointBackgroundColor: 'rgba(41, 234, 255, 0)',
            pointBorderWidth: 0,
            pointHitRadius:0,
            pointHoverBackgroundColor	: '#29eaff',
            hoverRadius: 0,
            data: [0,0,0,0,0,0,0,0,57,78],
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
              color: 'rgba(100, 77, 255, 1)',
              lineWidth: 0.1
          }
      }
    },
});
