const d = document,
     ls = localStorage;
export function btnMode(btnDark , classDark){
    const $mode = d.querySelector(btnDark),
    $theme = d.querySelectorAll('[data-dark]')
    let sun = '☀️',
    moom = '🌙'
    
    const darkMode = () =>{
        $theme.forEach(el => el.classList.add(classDark))
        $mode.textContent = sun;
        ls.setItem('theme','dark')
    }
    const ModeNormal = () =>{
        $theme.forEach(el => el.classList.remove(classDark))
        $mode.textContent = moom
        ls.setItem('theme','light')
    }

    
    d.addEventListener('click', e =>{
            if(e.target.matches('.mode')){
                if($mode.textContent === moom){
                darkMode()
                }
                else{
                ModeNormal()
                }
            }     
        })
    d.addEventListener('DOMContentLoaded', e =>{
        if(ls.getItem('theme') === null)ls.setItem('theme' , 'light')
        if(ls.getItem('theme') === 'light')ModeNormal()
        if(ls.getItem('theme') === 'dark')darkMode()
        
    })
}