


// sliders values
//WBC
var wbcslider = document.getElementById("WBCrange");
var wbcoutput = document.getElementById("WBCoutput");
wbcslider.oninput = function() {
  wbcoutput.innerHTML = this.value;
}
//RBC
var rbcslider = document.getElementById("RBCrange");
var rbcoutput = document.getElementById("RBCoutput");
rbcslider.oninput = function() {
  rbcoutput.innerHTML = this.value;
}
//HGB
var hgbslider = document.getElementById("HGBrange");
var hgboutput = document.getElementById("HGBoutput");
hgbslider.oninput = function() {
  hgboutput.innerHTML = this.value;
}
//HT
var htslider = document.getElementById("HTrange");
var htoutput = document.getElementById("HToutput");
htslider.oninput = function() {
  htoutput.innerHTML = this.value;
}
//MCV
var mcvslider = document.getElementById("MCVrange");
var mcvoutput = document.getElementById("MCVoutput");
mcvslider.oninput = function() {
  mcvoutput.innerHTML = this.value;
}
//MCH
var mchslider = document.getElementById("MCHrange");
var mchoutput = document.getElementById("MCHoutput");
mchslider.oninput = function() {
  mchoutput.innerHTML = this.value;
}
//MCHC
var mchcslider = document.getElementById("MCHCrange");
var mchcoutput = document.getElementById("MCHCoutput");
mchcslider.oninput = function() {
  mchcoutput.innerHTML = this.value;
}
//Platelets
var plslider = document.getElementById("PLrange");
var ploutput = document.getElementById("PLoutput");
plslider.oninput = function() {
  ploutput.innerHTML = this.value;
}
//RDW
var rdwslider = document.getElementById("RDWrange");
var rdwoutput = document.getElementById("RDWoutput");
rdwslider.oninput = function() {
  rdwoutput.innerHTML = this.value;
}
//Neutrophils
var neuslider = document.getElementById("NEUrange");
var neuoutput = document.getElementById("NEUoutput");
neuslider.oninput = function() {
  neuoutput.innerHTML = this.value;
}
//Lymphocytes
var lymslider = document.getElementById("LYMrange");
var lymoutput = document.getElementById("LYMoutput");
lymslider.oninput = function() {
  lymoutput.innerHTML = this.value;
}
//Monocytes
var monslider = document.getElementById("MONrange");
var monoutput = document.getElementById("MONoutput");
monslider.oninput = function() {
  monoutput.innerHTML = this.value;
}
//Eosinophils
var eosslider = document.getElementById("EOSrange");
var eosoutput = document.getElementById("EOSoutput");
eosslider.oninput = function() {
  eosoutput.innerHTML = this.value;
}
//Basophils
var basslider = document.getElementById("BASrange");
var basoutput = document.getElementById("BASoutput");
basslider.oninput = function() {
  basoutput.innerHTML = this.value;
}

//Glucose
var gluslider = document.getElementById("GLUrange");
var gluoutput = document.getElementById("GLUoutput");
gluslider.oninput = function() {
  gluoutput.innerHTML = this.value;
}
//Calcium
var caslider = document.getElementById("CArange");
var caoutput = document.getElementById("CAoutput");
caslider.oninput = function() {
  caoutput.innerHTML = this.value;
}
//Sodium
var naslider = document.getElementById("NArange");
var naoutput = document.getElementById("NAoutput");
naslider.oninput = function() {
  naoutput.innerHTML = this.value;
}
//Potassium
var kslider = document.getElementById("Krange");
var koutput = document.getElementById("Koutput");
kslider.oninput = function() {
  koutput.innerHTML = this.value;
}
//HCO3
var bicslider = document.getElementById("BICrange");
var bicoutput = document.getElementById("BICoutput");
bicslider.oninput = function() {
  bicoutput.innerHTML = this.value;
}
//Chloride
var chslider = document.getElementById("CHrange");
var choutput = document.getElementById("CHoutput");
chslider.oninput = function() {
  choutput.innerHTML = this.value;
}
//BUN
var bunslider = document.getElementById("BUNrange");
var bunoutput = document.getElementById("BUNoutput");
bunslider.oninput = function() {
  bunoutput.innerHTML = this.value;
}
//Cr
var crslider = document.getElementById("CRrange");
var croutput = document.getElementById("CRoutput");
crslider.oninput = function() {
  croutput.innerHTML = this.value;
}
//AST
var astslider = document.getElementById("ASTrange");
var astoutput = document.getElementById("ASToutput");
astslider.oninput = function() {
  astoutput.innerHTML = this.value;
}
//ALT
var altslider = document.getElementById("ALTrange");
var altoutput = document.getElementById("ALToutput");
altslider.oninput = function() {
  altoutput.innerHTML = this.value;
}
//Bilirubin
var bilslider = document.getElementById("BILrange");
var biloutput = document.getElementById("BILoutput");
bilslider.oninput = function() {
  biloutput.innerHTML = this.value;
}
//GGT
var ggtslider = document.getElementById("GGTrange");
var ggtoutput = document.getElementById("GGToutput");
ggtslider.oninput = function() {
  ggtoutput.innerHTML = this.value;
}
//ALP
var alpslider = document.getElementById("ALPrange");
var alpoutput = document.getElementById("ALPoutput");
alpslider.oninput = function() {
  alpoutput.innerHTML = this.value;
}
//PT
var ptslider = document.getElementById("PTrange");
var ptoutput = document.getElementById("PToutput");
ptslider.oninput = function() {
  ptoutput.innerHTML = this.value;
}
//PTT
var pttslider = document.getElementById("PTTrange");
var pttoutput = document.getElementById("PTToutput");
pttslider.oninput = function() {
  pttoutput.innerHTML = this.value;
}
//Albumin
var albslider = document.getElementById("ALBrange");
var alboutput = document.getElementById("ALBoutput");
albslider.oninput = function() {
  alboutput.innerHTML = this.value;
}



// charts
var ctx = document.getElementById('chart1').getContext('2d');
var chart1 = new Chart(ctx, {

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
                  beginAtZero: true,
                  display: false,
                  min:0,
                  max:100,
              },
               gridLines: {
                  circular: true,
                  color: '#232323',
                  lineWidth: 0.2,
              }
      },
    },

});



//CBC
function slider2data(){
  chart1.data.datasets[0].data[0] = document.getElementById('RBCrange').value;
  barChart.data.datasets[0].data[0] = document.getElementById('RBCrange').value;
  chartCard2.data.datasets[0].data[0] = document.getElementById('RBCrange').value;
  chartCard2.update();
  barChart.update();
  chart1.update();
}
function slider1data(){
  chart1.data.datasets[0].data[1] = document.getElementById('WBCrange').value;
  barChart.data.datasets[0].data[1] = document.getElementById('WBCrange').value;
  chartCard2.data.datasets[0].data[1] = document.getElementById('WBCrange').value;
  chartCard2.update();
  barChart.update();
  chart1.update();
}
function slider3data(){
  chart1.data.datasets[0].data[2] = document.getElementById('HGBrange').value;
  barChart.data.datasets[0].data[2] = document.getElementById('HGBrange').value;
  chartCard2.data.datasets[0].data[2] = document.getElementById('HGBrange').value;
  chartCard2.update();
  barChart.update();
  chart1.update();
}
function slider4data(){
  chart1.data.datasets[0].data[3] = document.getElementById('HTrange').value;
  barChart.data.datasets[0].data[3] = document.getElementById('HTrange').value;
  chartCard2.data.datasets[0].data[3] = document.getElementById('HTrange').value;
  chartCard2.update();
  barChart.update();
  chart1.update();
}
function slider5data(){
  chart1.data.datasets[0].data[4] = document.getElementById('MCVrange').value;
  barChart.data.datasets[0].data[4] = document.getElementById('MCVrange').value;
  chartCard2.data.datasets[0].data[4] = document.getElementById('MCVrange').value;
  chartCard2.update();
  barChart.update();
  chart1.update();
}
function slider6data(){
  chart1.data.datasets[0].data[5] = document.getElementById('MCHrange').value;
  barChart.data.datasets[0].data[5] = document.getElementById('MCHrange').value;
  chartCard2.data.datasets[0].data[5] = document.getElementById('MCHrange').value;
  chartCard2.update();
  barChart.update();
  chart1.update();
}
function slider7data(){
  chart1.data.datasets[0].data[6] = document.getElementById('MCHCrange').value;
  barChart.data.datasets[0].data[6] = document.getElementById('MCHCrange').value;
  chartCard2.data.datasets[0].data[6] = document.getElementById('MCHCrange').value;
  chartCard2.update();
  barChart.update();
  chart1.update();
}
function slider8data(){
  chart1.data.datasets[0].data[7] = document.getElementById('PLrange').value;
  barChart.data.datasets[0].data[7] = document.getElementById('PLrange').value;
  chartCard2.data.datasets[0].data[7] = document.getElementById('PLrange').value;
  chartCard2.update();
  barChart.update();
  chart1.update();
}
function slider9data(){
  chart1.data.datasets[0].data[8] = document.getElementById('RDWrange').value;
  barChart.data.datasets[0].data[8] = document.getElementById('RDWrange').value;
  chartCard2.data.datasets[0].data[8] = document.getElementById('RDWrange').value;
  chartCard2.update();
  barChart.update();
  chart1.update();
}


var ctx = document.getElementById('chart2').getContext('2d');
var chart2 = new Chart(ctx, {

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
            data: [65,65,65,65,65],
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
              min:0,
              max:100,
          },
          gridLines: {
              circular: true,
              color: '#232323',
              lineWidth: 0.2
          }
      }
    },
});

//DBC
function slider10data(){
  chart2.data.datasets[0].data[0] = document.getElementById('NEUrange').value;
  chart2.update();
}
function slider11data(){
  chart2.data.datasets[0].data[1] = document.getElementById('LYMrange').value;
  chart2.update();
}
function slider12data(){
  chart2.data.datasets[0].data[2] = document.getElementById('MONrange').value;
  chart2.update();
}
function slider13data(){
  chart2.data.datasets[0].data[3] = document.getElementById('EOSrange').value;
  chart2.update();
}
function slider14data(){
  chart2.data.datasets[0].data[3] = document.getElementById('BASrange').value;
  chart2.update();
}


var ctx = document.getElementById('chart3').getContext('2d');
var chart3 = new Chart(ctx, {

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
            data: [62,62,62,62,62,62],
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
              min:0,
              max:100,
          },
          gridLines: {
              circular: true,
              color: '#232323',
              lineWidth: 0.2
          }
      }
    },
});

//BMP

function slider15data(){
  chart3.data.datasets[0].data[0] = document.getElementById('GLUrange').value;
  chart3.update();
}
function slider16data(){
  chart3.data.datasets[0].data[1] = document.getElementById('CArange').value;
  chart3.update();
}
function slider17data(){
  chart3.data.datasets[0].data[2] = document.getElementById('NArange').value;
  chart3.update();
}
function slider18data(){
  chart3.data.datasets[0].data[3] = document.getElementById('Krange').value;
  chart3.update();
}
function slider19data(){
  chart3.data.datasets[0].data[4] = document.getElementById('BICrange').value;
  chart3.update();
}
function slider20data(){
  chart3.data.datasets[0].data[5] = document.getElementById('CHrange').value;
  chart3.update();
}


var ctx = document.getElementById('chart4').getContext('2d');
var chart4 = new Chart(ctx, {

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
            data: [65,65,65,65,65,65,65,65,65,65],
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
            min:0,
            max:100,
          },
          gridLines: {
              circular: true,
              color: '#232323',
              lineWidth: 0.2
          }
      }
    },
});

function slider21data(){
  chart4.data.datasets[0].data[0] = document.getElementById('ASTrange').value;
  chart4.update();
}
function slider22data(){
  chart4.data.datasets[0].data[1] = document.getElementById('ALTrange').value;
  chart4.update();
}
function slider23data(){
  chart4.data.datasets[0].data[2] = document.getElementById('BILrange').value;
  chart4.update();
}
function slider24data(){
  chart4.data.datasets[0].data[3] = document.getElementById('GGTrange').value;
  chart4.update();
}
function slider25data(){
  chart4.data.datasets[0].data[4] = document.getElementById('ALPrange').value;
  chart4.update();
}
function slider26data(){
  chart4.data.datasets[0].data[5] = document.getElementById('PTrange').value;
  chart4.update();
}
function slider27data(){
  chart4.data.datasets[0].data[6] = document.getElementById('PTTrange').value;
  chart4.update();
}
function slider28data(){
  chart4.data.datasets[0].data[7] = document.getElementById('ALBrange').value;
  chart4.update();
}
function slider29data(){
  chart4.data.datasets[0].data[8] = document.getElementById('BUNrange').value;
  chart4.update();
}
function slider30data(){
  chart4.data.datasets[0].data[9] = document.getElementById('CRrange').value;
  chart4.update();
}





// buttons
var card2 = document.getElementById('card2');
var card1 = document.getElementById('card1');
var card3 = document.getElementById('card3');
var card4 = document.getElementById('card4');
var card5 = document.getElementById('card5');
var arrowBtn1 = document.getElementById('arrowBtn1');
var arrowBtn2 = document.getElementById('arrowBtn2');
var arrowBtn3 = document.getElementById('arrowBtn3');
var arrowBtn4 = document.getElementById('arrowBtn4');
var arrowleft = document.getElementById('arrowleft');

arrowBtn1.onclick = function() {
  card2.style.display = "block";
}
arrowBtn2.onclick = function() {
  card2.style.display = "block";
}
arrowBtn3.onclick = function() {
  card2.style.display = "block";
}
arrowBtn4.onclick = function() {
  card2.style.display = "block";
}
arrowleft.onclick = function() {
  card2.style.display = "none";

}


// card 2 charts



var ctx = document.getElementById("barChart").getContext('2d');
var barChart = new Chart(ctx, {

    type: "horizontalBar",
    data: {
        labels: ['RBC', 'WBC', 'HGB', 'HT', 'MCV', 'MCH', 'MCHC','Platelets','RDW'],
        datasets: [{

            data: [-100, 59, -30, 81, -56, 55, 40,65,70],
            fill: false,
            backgroundColor: "rgba(198, 198, 198, 1)",
            HoverBackgroundColor	: '#FF7651',
            borderColor: "rgba(230, 230, 230, 0)",
            borderWidth: 1
        }]
    },
    options: {

        responsive: true,
        maintainAspectRatio: false,
        legend: false,
        scales: {
            lineWidth: 0.2,
            yAxes: [{
                gridLines: {
                  display: false,
                },
                barPercentage: 1.25,
                ticks: {
                    display: false,
                    beginAtZero: true,
                    min:-100,
                    max:100,
                    fontSize: 10
                }
            }],
            xAxes: [{
              ticks: {
                  fontSize: 10
              },
                stacked: true,

            }],

        }
    }
});

var ctx = document.getElementById('chartCard2').getContext('2d');
var chartCard2 = new Chart(ctx, {

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
            data: [60,60,60,60,60,60,60,60,60],
            fontSize: 10,
        }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: false,
      scale: {
              display: false,

              ticks: {
                  beginAtZero: true,
                  display: false,
                  min:0,
                  max:100,
              },
               gridLines: {
                  display: false,
                  circular: false,
                  color: '#232323',
                  lineWidth: 0.2,
              }
      },
    },

});
