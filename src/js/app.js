import '../scss/app.scss';
import 'particles.js';
import Splide from "@splidejs/splide";

new Splide('#splide',{
    type: 'loop',
    perPage: 1
}).mount();

particlesJS("splide", {
    "particles":{
        "number":{
            "value":50,
            "density":{
                "enable":false,
                "value_area":10
            }
        },
        "color":{
            "value":"#FFFFFF"
        },
        "shape":{
            "type":"circle",
        },
        "opacity":{
            "value":0.3,
            "random":true,
            "anim":{
                "enable":false,
                "speed":3,
                "opacity_min":0.05,
                "sync":false
            }
        },
        "size":{
            "value": 2,
            "random":true,
            "anim":{
                "enable":true,
                "speed":3,
                "size_min":0.1,
                "sync":false
            }
        },
        "line_linked":{
            "enable":false,
        },
        "move":{
            "enable":true,
            "speed":1,
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

