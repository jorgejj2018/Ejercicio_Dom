const w = window,
d = document;
export function ScrollBtn (btnScroll){
const $btnScroll = d.querySelector(btnScroll)

    w.addEventListener('scroll', e =>{
        let scroll= pageXOffset || d.documentElement.scrollTop
        
        if(scroll > 1370){
            $btnScroll.classList.remove('hidden-scroll')
        }
        else{
            $btnScroll.classList.add('hidden-scroll')
        }
    })
    d.addEventListener('click' , e =>{
        if(e.target.matches('.btn-scroll') || e.target.matches(` ${btnScroll} *`)){
        w.scrollTo({
            behavior:'smooth',
            top: 0,
        });
        }
    })
}