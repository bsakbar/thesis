
// buttons
var card2 = document.getElementById('card2');
var arrowBtn1 = document.getElementById("arrowBtn1");

arrowBtn1.onclick = function() {
  card2.style.display = "block";

}

window.onclick = function(event) {
  if (event.target == card2) {
    card2.style.display = "none";
  }
}


// sliders
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
