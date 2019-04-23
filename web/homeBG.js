// code from https://codepen.io/observationalist/pen/LELQVm


var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width =window.innerWidth;
canvas.height =window.innerHeight;
document.body.appendChild(canvas);


ctx.fillStyle="#ffffff";


ctx.fillRect(0,0,canvas.width,canvas.height);


    var particles = [];
    for (var i=0 ; i<50 ; i++){
        particles.push(new Particle());
     }
function Particle () {
    this.posX = Math.random() * canvas.width;
    this.posY = Math.random() * canvas.height;
    this.vX = Math.random() * 20 -10;
    this.vY = Math.random() * 20 - 10;
    // this.radius = Math.random() * 30 - 10;
    // this.radius = 100;
    this.startangle = 1.1 * Math.PI;
    this.finalangle = 2* Math.PI;
    this.clockwise = false;
    this.radius = 5 + Math.random()*20;
    var g = "rgba(233, 28, 62, 0)";
    var b = "rgba(230, 230, 230, 0)";
    var r = "rgba(230, 230, 230, 0)";
    var color  = [g,b,r];

    this.color= color[Math.floor(Math.random()*3)];

}
var draw = function() {

    ctx.fillStyle="rgba(255, 255, 255,1)";
    ctx.fillRect(0,0,canvas.width,canvas.height);


    for (var t=0; t<particles.length;t++){

                 var p = particles[t];

                 ctx.beginPath();
                 ctx.fillStyle = p.color;
                 ctx.arc(p.posX,p.posY,p.radius,0,Math.PI*2,p.clockwise);

                 ctx.closePath();
                 ctx.fill();
                 ctx.strokeStyle="rgba(60, 60, 60, 1)";
                 ctx.lineWidth = 0.2;
                 ctx.stroke();


      p.posX += p.vX;
      p.posY += p.vY;



      if ((p.posY + p.radius) > canvas.height * 1.0){
      	p.vY *= -0.3;
      	p.vX *= 0.1;
      	p.posY = (canvas.height * 1.0) - p.radius;
      }
      // if (p.vY == 5){p.vY=0;}
      if ((p.posX - p.radius) <= canvas.width * 0.01){
      	p.vX *=-1;
      	p.posX = (canvas.width * 0.01) + p.radius;
      }
      if ((p.posX + p.radius) >= canvas.width * 1.0){
         p.vX *=-1;
         p.posX = (canvas.width * 1.0) - p.radius;
      }
       if ((p.posY - p.radius) <= canvas.height * 0.01){
      	p.vY *= -0.4;
      	p.vX *= 0.1;
      	p.posY = (canvas.height * 0.01) + p.radius;
      }

 }
 };
 setInterval(draw , 30);
