var ctx = document.getElementById('canvas').getContext('2d');
var chart = new Chart(ctx, {

    type: 'radar',

    data: {

        labels: ['RBC', 'WBC', 'HGB', 'HT', 'MCV', 'MCH', 'MCHC','Platelets','RDW'],
        datasets: [{
            label: 'TBD',
            backgroundColor:"transparent",
            borderWidth: 0.5,
            borderColor: 'rgba(255 , 82,  29, 1)',
            pointBackgroundColor: 'rgba(255 , 82,  29, 1)',
            pointBorderWidth: 5,
            pointHitRadius:5,
            pointHoverBackgroundColor	: '#FF5F40',
            hoverRadius: 7,
            data: [20, 20, 30, 30, 40, 50, 60,70, 80, 88],
            fontSize: 20

        }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: false,
      scale: {
               gridLines: {
                  circular: true,
                  color: 'white',
                  lineWidth: 0.3
              }
      }


    },




});
