const d = document,
     b = document.body;
export function btnMode(btnDark){
    const $modeDark = d.querySelector(btnDark)
    const $BgHeader = d.querySelector('.cabezera')
    const $BgHeaderH1 = d.querySelector('.cabezera h1')
    const darkMode = () =>{
        $BgHeader.style.backgroundColor = '#34495E'
        $BgHeaderH1.style.color = '#F4D03F'
        b.style.backgroundColor = '#0001'
        $modeDark.style.backgroundColor = 'whitesmoke'
        $modeDark.innerText = '☀️'
        $modeDark.classList.remove('mode')
        $modeDark.classList.add('modeDark')
    }
    const ModeNormal = () =>{
        $BgHeader.style.backgroundColor = '#F4D03F'
        $BgHeaderH1.style.color = '#34495E'
        b.style.backgroundColor = '#cae2e6'
        $modeDark.style.backgroundColor = '#34495E'
        $modeDark.innerText = '🌙'
        $modeDark.classList.remove('modeDark')
        $modeDark.classList.add('mode')
    }

    d.addEventListener('dblclick', (e) =>{
        if(e.target.matches('.mode')){
            darkMode()
        }

    })
    
    d.addEventListener('click', e =>{
        if(e.target.matches('.modeDark')){
            ModeNormal()
        }     
    })
}