import hamburger from "./menu_hamburger.js"
import {clock, clockAlarm} from "./clock_alarm.js"
import {ball} from "./teclado.js"
import countDown from "./cuenta_regresiva.js";
import { ScrollBtn } from "./btn_scroll.js";
import { btnMode } from "./btn-dark_mode.js";
import responsiveM from "./objeto_responsive.js";

const d = document;
d.addEventListener('DOMContentLoaded', (e) =>{
    hamburger('.btn-menu','.panel-menu','.ctn-link *')
    clock('#clock','#clock-start','#clock-stop')
    clockAlarm('./asset/alarm.mp3','#alarm-start','#alarm-stop')
    countDown('ctn-time-back','May 03, 2021 00:00:00', 'Gracias por abrir mi mensaje: ...')
    ScrollBtn('.btn-scroll')
    responsiveM('youtube',
     "(min-width:1024px)",
     `<a href="https://goo.gl/maps/tLs37Ux5tVCL9FZdA"target="_blank">Ver youtube</a>`, 
     `<iframe width="560" height="315" src="https://www.youtube.com/embed/SKra9MCiVKw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);

     responsiveM('gmaps',
     "(min-width:1024px)",
     `<a href="https://goo.gl/maps/tLs37Ux5tVCL9FZdA" target="_blank">Ver Mapa</a>`, 
     `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.7257123296777!2d174.75989961582363!3d-36.849044587229876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47f0134a6063%3A0xde68119b605d0ff6!2sSkyCity%20Auckland!5e0!3m2!1ses!2sco!4v1612300500518!5m2!1ses!2sco" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`);
})

d.addEventListener('keydown', (e) =>{
    ball('.ctn-ball','.ball', e)
})
btnMode('.mode', 'modeDark')