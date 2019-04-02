var ctx = document.getElementById('canvas').getContext('2d');
var chart = new Chart(ctx, {

    type: 'radar',


    data: {

        labels: ['RBC', 'WBC', 'HGB', 'HT', 'MCV', 'MCH', 'MCHC','Platelets','RDW'],
        datasets: [{
            label: 'TBD',
            backgroundColor: 'rgb(255, 56, 3, 0.4)',
            borderColor: 'rgba(0, 0, 0, 0)',
            pointBackgroundColor: 'pointBackgroundColor',
            pointHoverBackgroundColor	: '#FF5F40',
            data: [0, 10, 20, 30, 40, 50, 60,70, 80, 90]

        }]
    },
    options: {
      gridlines: {
        circular:true,
      },

      legend: {
            position: 'bottom',
          },

          title: {
            text: 'Chart.js Outcome Graph'
          }

    },




});
