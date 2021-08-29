//import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import '../scss/app.scss';
// import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
// import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import 'particles.js';


import Splide from "@splidejs/splide";

new Splide('#splide',{
    type: 'loop',
    perPage: 1
}).mount();

particlesJS("splide", {
    "particles":{
        "number":{
            "value":300,
            "density":{
                "enable":true,
                "value_area":4000
            }
        },
        "color":{
            "value":"#666"
        },
        "shape":{
            "type":"circle",
            "stroke":{
                "width":0,
                "color":"#000000"
            },
        },
        "opacity":{
            "value":1,
            "random":true,
            "anim":{
                "enable":false,
                "speed":4,
                "opacity_min":0.3,
                "sync":false
            }
        },
        "size":{
            "value":2,
            "random":true,
            "anim":{
                "enable":true,
                "speed":5,
                "size_min":0.01,
                "sync":false
            }
        },
        "line_linked":{
            "enable":false,
        },
        "move":{
            "enable":true,
            "speed":2.8,
            "direction":"top",
            "random":true,
            "straight":false,
            "out_mode":"out",
            "bounce":false,
            "attract":{
                "enable":true,
                "rotateX":600,
                "rotateY":1200
            }
        }
    },"interactivity":{
        "detect_on":"canvas",
        "events":{
            "onhover":{
                "enable":false,
            },
            "onclick":{
                "enable":false,
            },
            "resize":true
        },
    },
    "retina_detect":true
});
