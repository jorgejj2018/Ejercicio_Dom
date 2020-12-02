import hamburger from "./menu_hamburger.js"

const d = document;
d.addEventListener('DOMContentLoaded', (e) =>{
    hamburger('.btn-menu','.panel-menu','.ctn-link *')
})
