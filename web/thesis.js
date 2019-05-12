Chart.defaults.global.defaultFontFamily = "Roboto Mono";
Chart.defaults.global.defaultFontSize = "12px";
Chart.defaults.global.defaultFontStyle = "400";


const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function rescaling(input, min, avg_min, avg_max, max){
	if (input >= min &&  input < avg_min){
		return scale(input, min, avg_min, 0, 50)

	} else if (input >= avg_min &&  input <= avg_max){
		return scale(input, avg_min, avg_max, 50, 80)

	} else if (input > avg_max &&  input <= max){
		return scale(input, avg_max, max, 80, 100)

	} else {
		return 0;
	}
}

// sliders values
//WBC
var wbcslider = document.getElementById("WBCrange");
var wbcoutput = document.getElementById("WBCoutput");
wbcslider.oninput = function() {
  wbcoutput.innerHTML = this.value
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
  hgboutput.innerHTML = this.value/10;
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
  mchoutput.innerHTML = this.value/10;
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
  rdwoutput.innerHTML = this.value/10;
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
  basoutput.innerHTML = this.value/10;
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
  caoutput.innerHTML = this.value/10;
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
  koutput.innerHTML = this.value/10;
}
//HCO3
var bicslider = document.getElementById("BICrange");
var bicoutput = document.getElementById("BICoutput");
bicslider.oninput = function() {
  bicoutput.innerHTML = this.value/10;
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
            borderColor: '#1a1a1a',
            pointBackgroundColor: 'rgba(255, 178, 59, 1)',
            pointBorderWidth: 1,
            pointHitRadius:0,
            pointHoverBackgroundColor	: '#232323',
            hoverRadius: 4,
            data: [65,65,65,65,65,65,65,65,65],
            fontSize: 14,
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

function slider1data(){
  var norm_value = rescaling(document.getElementById('WBCrange').value, 10, 45, 110, 150)
  var mid_norm_value = rescaling(55, 10, 45, 110, 150)
  chart1.data.datasets[0].data[1] = norm_value;
  chartCard2.data.datasets[0].data[1] = norm_value;
  barChart.data.datasets[0].data[1]= (norm_value-mid_norm_value)/mid_norm_value*100;
  chartCard2.update();
  barChart.update();
  chart1.update();
}


function slider2data(){
  var norm_value = rescaling(document.getElementById('RBCrange').value, 100, 350, 550, 700);
  var mid_norm_value = rescaling(450, 100, 350, 550, 700)
  chart1.data.datasets[0].data[0] = norm_value;
  chartCard2.data.datasets[0].data[0] = norm_value;
  barChart.data.datasets[0].data[0]= (norm_value-mid_norm_value)/mid_norm_value*100;
  chartCard2.update();5
  barChart.update();
  chart1.update();
}

function slider3data(){
  var norm_value = rescaling(document.getElementById('HGBrange').value, 0, 120, 160, 200);
  var mid_norm_value = rescaling(140,  0, 120, 160, 200)
  chart1.data.datasets[0].data[2] = norm_value;
  chartCard2.data.datasets[0].data[2] = norm_value ;
  barChart.data.datasets[0].data[2]= (norm_value-mid_norm_value)/mid_norm_value*100;
  chartCard2.update();
  barChart.update();
  chart1.update();
}
function slider4data(){
  var norm_value = rescaling(document.getElementById('HTrange').value, 0, 36, 46, 100);
  var mid_norm_value = rescaling(41,  0, 36, 46, 100)
  chart1.data.datasets[0].data[3] = norm_value;
  chartCard2.data.datasets[0].data[3] = norm_value;
  barChart.data.datasets[0].data[3]= (norm_value-mid_norm_value)/mid_norm_value*100;
  chartCard2.update();
  barChart.update();
  chart1.update();
}
function slider5data(){
  var norm_value = rescaling(document.getElementById('MCVrange').value, 30, 80, 100, 150);
  var mid_norm_value = rescaling(90, 30, 80, 100, 150)
  chart1.data.datasets[0].data[4] = norm_value;
  barChart.data.datasets[0].data[4] = (norm_value-mid_norm_value)/mid_norm_value*100;
  chartCard2.data.datasets[0].data[4] = norm_value;
  chartCard2.update();
  barChart.update();
  chart1.update();
}
function slider6data(){
  var norm_value = rescaling(document.getElementById('MCHrange').value, 0, 254, 346, 700);
  var mid_norm_value = rescaling(300, 0, 254, 346, 700)
  chart1.data.datasets[0].data[5] = norm_value;
  barChart.data.datasets[0].data[5] = (norm_value-mid_norm_value)/mid_norm_value*100;
  chartCard2.data.datasets[0].data[5] = norm_value;
  chartCard2.update();
  barChart.update();
  chart1.update();
}
function slider7data(){
  var norm_value = rescaling(document.getElementById('MCHCrange').value, 0, 31, 36, 100);
  var mid_norm_value = rescaling(33.5, 0, 31, 36, 100)
  chart1.data.datasets[0].data[6] = norm_value;
  barChart.data.datasets[0].data[6] = (norm_value-mid_norm_value)/mid_norm_value*100;
  chartCard2.data.datasets[0].data[6] = norm_value;
  chartCard2.update();
  barChart.update();
  chart1.update();
}
function slider8data(){
  var norm_value = rescaling(document.getElementById('PLrange').value, 10, 150, 400, 900);
  var mid_norm_value = rescaling(275, 10, 150, 400, 900)
  chart1.data.datasets[0].data[7] = norm_value;
  barChart.data.datasets[0].data[7] = (norm_value-mid_norm_value)/mid_norm_value*100;
  chartCard2.data.datasets[0].data[7] = norm_value;
  chartCard2.update();
  barChart.update();
  chart1.update();
}
function slider9data(){
  var norm_value = rescaling(document.getElementById('RDWrange').value, 0, 118, 156, 250);
  var mid_norm_value = rescaling(137, 0, 118, 156, 250)
  chart1.data.datasets[0].data[8] = norm_value;
  barChart.data.datasets[0].data[8] = (norm_value-mid_norm_value)/mid_norm_value*100;
  chartCard2.data.datasets[0].data[8] = norm_value;
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
  var norm_value = rescaling(document.getElementById('NEUrange').value, 0,40, 80, 100);
  var mid_norm_value = rescaling(60, 0,40, 80, 100);
  chart2.data.datasets[0].data[0] = norm_value;
  chart2.update();
}
function slider11data(){
  var norm_value = rescaling(document.getElementById('LYMrange').value, 0,20, 40, 100);
  var mid_norm_value = rescaling(30, 0,20, 40, 100);
  chart2.data.datasets[0].data[1] = norm_value;
  chart2.update();
}
function slider12data(){
  var norm_value = rescaling(document.getElementById('MONrange').value, 0,2, 10, 20);
  var mid_norm_value = rescaling(6, 0,2, 10, 20);
  chart2.data.datasets[0].data[2] = norm_value;
  chart2.update();
}
function slider13data(){
  var norm_value = rescaling(document.getElementById('EOSrange').value, 0,1, 6, 10);
  var mid_norm_value = rescaling(3.5, 0,1, 6, 10);
  chart2.data.datasets[0].data[3] = norm_value;
  chart2.update();
}
function slider14data(){
  var norm_value = rescaling(document.getElementById('BASrange').value, 0, 5, 10, 20);
  var mid_norm_value = rescaling(7.5, 0, 5, 10, 20);
  chart2.data.datasets[0].data[4] = norm_value;
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
  var norm_value = rescaling(document.getElementById('GLUrange').value, 0, 0, 140, 200);
  var mid_norm_value = rescaling(70, 0, 0, 140, 200);
  chart3.data.datasets[0].data[0] = norm_value;
  chart3.update();
}
function slider16data(){
  var norm_value = rescaling(document.getElementById('CArange').value, 0, 85, 109, 200);
  var mid_norm_value = rescaling(97, 0, 85, 109, 200);
  chart3.data.datasets[0].data[1] = norm_value;
  chart3.update();
}
function slider17data(){
  var norm_value = rescaling(document.getElementById('NArange').value, 0, 135, 147, 250);
  var mid_norm_value = rescaling(141, 0, 135, 147, 250);
  chart3.data.datasets[0].data[2] = norm_value;
  chart3.update();
}
function slider18data(){
  var norm_value = rescaling(document.getElementById('Krange').value, 0, 37, 52, 100);
  var mid_norm_value = rescaling(44.5, 0, 37, 52, 100);
  chart3.data.datasets[0].data[3] = norm_value;
  chart3.update();
}
function slider19data(){
  var norm_value = rescaling(document.getElementById('BICrange').value, 0, 230, 300, 1000);
  var mid_norm_value = rescaling(265, 0, 230, 300, 1000);
  chart3.data.datasets[0].data[4] = norm_value;
  chart3.update();
}
function slider20data(){
  var norm_value = rescaling(document.getElementById('CHrange').value, 0, 98, 106, 150);
  var mid_norm_value = rescaling(102, 0, 98, 106, 150);
  chart3.data.datasets[0].data[5] = norm_value;
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
            pointHoverBackgroundColor	: '#232323',
            hoverRadius: 4,
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
              lineWidth: 0.2,

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
var arrowBtndown = document.getElementById('arrowBtndown');

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

arrowBtndown.onclick = function() {
  height = document.getElementById("bheight").value;
  weight = document.getElementById("bweight").value;
  // console.log(height,weight)
  bmi = weight / Math.pow((height/100),2)
  console.log(bmi)
  // if (bmi >= 15 && bmi <= 50){
  var newLeftMargin = parseInt(55 + 11 * (bmi -15));
  console.log(newLeftMargin)
  target = document.getElementById("dot").setAttribute('style','margin-left:'+newLeftMargin+'px;')
  // document.getElementById("dot").style.marginLeft= 0;
  // }
}


// card 2 charts



var ctx = document.getElementById("barChart").getContext('2d');
var barChart = new Chart(ctx, {

    type: "horizontalBar",
    data: {
        labels: ['RBC', 'WBC', 'HGB', 'HT', 'MCV', 'MCH', 'MCHC','PT','RDW'],
        datasets: [{
            // labels: ['RBC', 'WBC', 'HGB', 'HT', 'MCV', 'MCH', 'MCHC','Platelets','RDW'],
            data: [0,0,0,0,0,0,0,0,0],
            fill: false,
            borderWidth: 0.5,
            borderColor: '#232323',
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
          ticks: {
              display: false,
              beginAtZero: true,
              min:-100,
              max:100,
          },
            scaleLabel:{
              display: true,
            },
            lineWidth: 0.5,
              yAxes: [{
                  gridLines: {
                    display: false,
                  },
                  barPercentage: 0.6,
                  ticks: {
                      display: true,
                      beginAtZero: true,
                      min:-100,
                      max:100,
                      fontSize: 8,
                      fontFamily: "Roboto Mono",
                      defaultFontStyle: 200,
                  }
            }],
            xAxes: [{
              // display: false,
              ticks: {
                  fontSize: 10,
                  fontFamily: "Roboto Mono",
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

        labels: ['RBC', 'WBC', 'HGB', 'HT', 'MCV', 'MCH', 'MCHC','PT','RDW'],

        datasets: [{
            backgroundColor:'rgba(255, 178, 59, 0)',
            borderWidth: 0.5,
            borderColor: '#232323',
            pointBackgroundColor: 'rgba(255, 178, 59, 1)',
            pointBorderWidth: 1,
            pointHitRadius:0,
            pointHoverBackgroundColor	: '#232323',
            hoverRadius: 4,
            data: [65,65,65,65,65,65,65,65,65],
            fontSize: 8,
        }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: false,
      scale: {
              display: true,

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


// Blood Pressure

var bpslider1 = document.getElementById("BPrange1");
var bpoutput1 = document.getElementById("BPoutput1");
bpslider1.oninput = function() {
  bpoutput1.innerHTML = this.value;
}

var bpslider2 = document.getElementById("BPrange2");
var bpoutput2 = document.getElementById("BPoutput2");
bpslider2.oninput = function() {
  bpoutput2.innerHTML = this.value;
}

var ctx = document.getElementById('bpchart').getContext('2d');
var bpchart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Scatter Dataset',
            data: [{
                x: -10,
                y: 0
            }]
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});
