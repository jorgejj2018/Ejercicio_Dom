import hamburger from "./menu_hamburger.js"
import {clock, clockAlarm} from "./clock_alarm.js"
import {ball} from "./teclado.js"
import countDown from "./cuenta_regresiva.js";
import { ScrollBtn } from "./btn_scroll.js";
import { btnMode } from "./btn-dark_mode.js";

const d = document;
d.addEventListener('DOMContentLoaded', (e) =>{
    hamburger('.btn-menu','.panel-menu','.ctn-link *')
    clock('#clock','#clock-start','#clock-stop')
    clockAlarm('./asset/alarm.mp3','#alarm-start','#alarm-stop')
    //countDown('ctn-time-back','May 03, 2021 00:00:00', 'Gracias por abrir mi mensaje: ...')
    ScrollBtn('.btn-scroll')
    btnMode('.mode')
})

d.addEventListener('keydown', (e) =>{
     ball('.ctn-ball','.ball', e)
})