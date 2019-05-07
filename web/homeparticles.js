// particlesJS: https://github.com/VincentGarreau/particles.js/

particlesJS({
  "particles": {
    "number": {
      "value": 111,
      "density": {
        "enable": true,
        "value_area": 3367.1653278175977
      }
    },
    "color": {
      "value": "#ff4d4d"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#161616"
      },
      "polygon": {
        "nb_sides": 7
      },
      "image": {
        "src": "",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 12.02559045649142,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 7.308694910712106,
        "size_min": 0.8120772123013452,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 128.27296486924183,
      "color": "#232323",
      "opacity": 0.2725800503471389,
      "width": 0.9620472365193136
    },
    "move": {
      "enable": true,
      "speed": 3.206824121731046,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "remove"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
  });
var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);;
