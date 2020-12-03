import hamburger from "./menu_hamburger.js"
import {clock, clockAlarm} from "./clock-alarm.js"

const d = document;
d.addEventListener('DOMContentLoaded', (e) =>{
    hamburger('.btn-menu','.panel-menu','.ctn-link *')
    clock('#clock','#clock-start','#clock-stop')
    clockAlarm('./asset/alarm.mp3','#alarm-start','#alarm-stop')
})
