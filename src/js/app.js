//import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import '../scss/app.scss';
// import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
// import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

import Splide from "@splidejs/splide";

new Splide('#splide',{
    type: 'loop',
    perPage: 1
}).mount();
