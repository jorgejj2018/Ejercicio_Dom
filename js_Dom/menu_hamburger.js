export default function hamburger(panelBtn, panel, menuLink){
    const d = document;
    const $btnMenuActive = d.querySelector('.btn-menu')
    d.addEventListener('click', e =>{
       // console.log(e.target)
        if(e.target.matches(panelBtn) || e.target.matches(` ${panelBtn} *`)){
            d.querySelector(panel).classList.toggle('active-menu')
            $btnMenuActive.classList.toggle('is-active')
        }
        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove('active-menu')
        }
    })
}